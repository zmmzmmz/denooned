// import { Pool } from "https://deno.land/x/postgres@v0.16.0/mod.ts";

// const pool = new Pool(Deno.env.get('DATABASE_URL'), 3, true);

// const client = await pool.connect();
// export default client;
// import postgres from "https://deno.land/x/postgresjs@v3.2.4/mod.js";

// const url = Deno.env.get('DATABASE_URL') || '';
// const sql = postgres(url, {});

// export default sql;

import {MySQLConnector, Database} from "https://deno.land/x/denodb@v1.0.40/mod.ts";

const connector = new MySQLConnector({
  database: 'ub_db',
  host: 'rm-bp1l8k78mb4ezf238eo.mysql.rds.aliyuncs.com',
  username: Deno.env.get('DB_USER') || 'hello',
  password: Deno.env.get('DB_PWD') || '',
  port: 3306, // optional
});

const db = new Database(connector);
export default db;

