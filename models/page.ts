import sql from '../db.ts';
const tableName = 'yy_page';
class Page {
  async list() {
    const pages = await sql`select * from ${tableName}`;
    return pages;
  }
}

export default Page;