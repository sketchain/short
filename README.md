# short

基于 Cloudflare Workers + KV 的短链接 / 文本分享服务，个人自用。

## 功能

- `GET /:slug` — 根据 slug 查询 KV 存储
  - 值为合法 URL：302 跳转
  - 值为普通文本：200 返回文本内容
  - slug 不存在或为空：404

## TODO

- [ ] 鉴权机制（API Key / Bearer Token）
- [ ] 写入接口 `POST /` 或 `PUT /:slug`
- [ ] 删除接口 `DELETE /:slug`
- [ ] 自定义 slug 与随机 slug 生成
- [ ] 过期时间（TTL）支持
- [ ] 访问统计

## Feature 规划

- 批量导入 / 导出
- 管理面板（简易 Web UI）
- 访问日志与分析
- 自定义跳转状态码（301 / 302 / 307）

## 部署

1. 安装依赖

```sh
npm install
```

2. 在 Cloudflare Dashboard 创建 KV Namespace，将 ID 填入 `wrangler.toml`

3. 本地开发

```sh
npx wrangler dev
```

4. 部署到 Cloudflare

```sh
npx wrangler deploy
```

也可通过 Cloudflare Dashboard 连接 Git 仓库，推送后自动部署。
