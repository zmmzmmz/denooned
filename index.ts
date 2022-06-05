import { Application } from "https://deno.land/x/oak@v10.6.0/mod.ts";
import PageRoute from './routes/page.ts';
import WebRoute from './routes/web.ts';

const app = new Application();

// api routes
app.use(PageRoute.routes());
app.use(PageRoute.allowedMethods());
app.use(WebRoute.routes());
app.use(WebRoute.allowedMethods());

await app.listen({ port: 8000 });
