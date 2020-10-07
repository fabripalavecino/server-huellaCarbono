const Viaje = (sequelize, type) => {
    return sequelize.define("viaje",{
        id: { type: type.INTEGER, primaryKey: true, autoIncrement: true },
        partida: { type: type.STRING },
        termino: { type: type.STRING },
        transporte: { type: type.STRING },
        km: { type: type.STRING },
        idaVuelta: { type: type.BOOLEAN },
        huella: { type: type.STRING }
    })
}

module.exports = Viaje;