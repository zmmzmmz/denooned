import { Status, Context } from "https://deno.land/x/oak@v10.6.0/mod.ts";

export function index(ctx: Context) {
  ctx.response.status = Status.OK;
  ctx.response.type = "json";
  ctx.response.body = {};
}
