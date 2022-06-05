import { Router } from "https://deno.land/x/oak@v10.6.0/mod.ts";

const router = new Router();

router.get('/', async (ctx) => {
  await ctx.send({
    root: `${Deno.cwd()}/templates`,
    index: 'index.html',
  })
});


export default router;