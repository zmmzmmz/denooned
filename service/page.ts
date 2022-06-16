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