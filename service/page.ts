import {Model} from "https://deno.land/x/denodb@v1.0.40/mod.ts";
import Page from '../models/page.ts';

export async function getPageByPath(path: string) {
  try {
    const res = await Page.where('path', path).first();
    return {
      success: true,
      data: res,
    }
  } catch(e) {
    console.error('Page Result Error: ', e.message);
    return {
      success: false,
    }
  }
}