import { Application, Status } from 'https://deno.land/x/oak@v10.6.0/mod.ts';
import { renderFile } from 'https://deno.land/x/mustache@v0.3.0/mod.ts';
import PageRoute from './routes/page.ts';
import WebRoute from './routes/web.ts';
import { getPageByPath } from './service/page.ts';

const app = new Application();

// api routes
app.use(PageRoute.routes());
app.use(PageRoute.allowedMethods());
app.use(WebRoute.routes());
app.use(WebRoute.allowedMethods());

// 微前端容器
app.use(async (ctx) => {
  // const { pathname } = ctx.request.url;
  // const result = await getPageByPath(pathname);
  // let name: string = '';
  // if (result.success) {
  //   name = result.data?.name || '';
  // }
  // // if (!result.success || !result.data) {
  // //   ctx.response.status = Status.NotFound;
  // //   ctx.response.body = 'Not Found';
  // //   return;
  // // }
  // name = result.data;
  const res =
    (await renderFile(`${Deno.cwd()}/templates/container.html`, {})) || '';
  return (ctx.response.body = res);
});

await app.listen({ port: 8000 });
