import { Sequelize } from "sequelize";
import { User } from "./User.js";

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres", // ou mysql/sqlite
});

await sequelize.authenticate();
await sequelize.sync();

export { sequelize, User };
