const mongoClient = require('../api/database/mongo')
const seleccion_de_almuerzo = async(data) => {

    function between(min, max) {
        return Math.floor(
            Math.random() * (max - min + 1) + min
        )
    }

    const id_seleccion = data ? Number(data) : between(1, 6)
    console.log("id_seleccion", id_seleccion);
    console.log("id_seleccion", typeof id_seleccion);

    const response = await mongoClient.GET_ONE('platos', {
        plato_id: id_seleccion
    })

    console.log("response lamuerzo al azer", response);

    return response
}

module.exports = {
    seleccion_de_almuerzo
}