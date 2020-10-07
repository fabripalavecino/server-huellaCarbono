const Trabajador =  (sequelize, type) => {
    return sequelize.define("trabajador", {
      id: { type: type.INTEGER, primaryKey: true, autoIncrement: true },
      nombre: { type: type.STRING },
      mail: { type: type.STRING },
      password: { type: type.STRING },
    });
  };

  module.exports = Trabajador;