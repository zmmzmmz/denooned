import { Model, DataTypes } from "https://deno.land/x/denodb@v1.0.40/mod.ts";
import connect from '../db.ts';

export default class PageModel extends Model {
  static table = "yy_page";
  static fields = {
    id: { type: DataTypes.INTEGER, primaryKey: true},
    name: DataTypes.STRING,
    path: DataTypes.STRING,
    type: DataTypes.STRING,
    code: DataTypes.STRING,
    created_at: DataTypes.DATETIME,
    updated_at: DataTypes.DATETIME,
  };
}

connect.link([PageModel]);