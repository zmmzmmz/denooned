import { Router } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import {renderFile} from "../mod/eta/mod.ts";

const router = new Router();

// 首页
router.get('/', async (ctx) => {
  const res = await renderFile('./index.html', {}) || '';
  ctx.response.body = res;
});

// 容器路径
router.get('/page/:path', async (ctx) => {
  const res = await renderFile('./container.html', { name: 903 }) || '';
  ctx.response.body = res;
})


export default router;