const ViajeModel = require("../models/Viaje");
const TrabajadorModel = require("../models/Trabajador");
const Sequelize = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: "mysql",
  define: {
    timestamps: false,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});
// Instancias
const Viaje = ViajeModel(sequelize, Sequelize);
const Trabajador = TrabajadorModel(sequelize,Sequelize);

// Relaciones
Viaje.belongsToMany(Trabajador, {through: "viaje_trabajador"});
Trabajador.belongsToMany(Viaje, {through: "viaje_trabajador"});

sequelize.sync();

module.exports = { sequelize, Sequelize, Viaje, Trabajador };