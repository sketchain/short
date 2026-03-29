export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const slug = url.pathname.slice(1);

    if (!slug) {
      return new Response(null, { status: 404 });
    }

    const value = await env.KV.get(slug);

    if (value === null) {
      return new Response(null, { status: 404 });
    }

    try {
      const parsed = new URL(value);
      if (parsed.protocol === 'http:' || parsed.protocol === 'https:') {
        return new Response(value, { status: 302, headers: { Location: value } });
      }
    } catch {}

    return new Response(value, { status: 200 });
  },
};
