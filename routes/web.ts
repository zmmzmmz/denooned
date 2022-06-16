import { Router } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import { renderFile } from "https://deno.land/x/mustache@v0.3.0/mod.ts";

const router = new Router();

// 首页
router.get('/', async (ctx) => {
  const res = await renderFile(`${Deno.cwd()}/templates/container.html`, {
    title: '首页',
  }) || '';
  ctx.response.body = res;
});


export default router;