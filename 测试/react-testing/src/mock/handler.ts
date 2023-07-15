import { rest } from 'msw';

/**
 * service worker
 * 拦截请求，使用 浏览器 service worker 代替请求
 */

export const handlers = [rest.get('https://xxx.net/api', (req, res, ctx) => {
    return res(
        ctx.status(200),
        ctx.json({
            results: [{}]
        })
    )
})]