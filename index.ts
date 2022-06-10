import { Application } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import {configure} from "./mod/eta/mod.ts";
import PageRoute from './routes/page.ts';
import WebRoute from './routes/web.ts';

const app = new Application();

const viewPath = `${Deno.cwd()}/templates/`
configure({
  views: viewPath,
  tags: ['{{', '}}'],
  async: true
})

// api routes
app.use(PageRoute.routes());
app.use(PageRoute.allowedMethods());
app.use(WebRoute.routes());
app.use(WebRoute.allowedMethods());

await app.listen({ port: 8000 });
