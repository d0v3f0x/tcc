import { DataTypes } from "sequelize";
import sequelize from "../config/database.js"; // seu arquivo de conexão

export const User = sequelize.define("User", {
  nomeCompleto: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  endereco: {
    type: DataTypes.STRING,
  },
  telefone: {
    type: DataTypes.STRING,
  },
  idade: {
    type: DataTypes.INTEGER,
  },
  sexo: {
    type: DataTypes.STRING,
  },
});
