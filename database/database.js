import Sequelize from "sequelize";

export const sequelize = new Sequelize("alk", "postgres", "asdasd", {
  host: "localhost",
  dialect: "postgres",
});
