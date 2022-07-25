const axios = require('axios');
const clienteMongo = require('../api/database/mongo')

const get_request = async(data) => {
    // console.log('GET Request');
    try {
        const request = await axios.get(
            `https://recruitment.alegra.com/api/farmers-market/buy?ingredient=${data}`
        );

        const cant_result = request.data.quantitySold

        await clienteMongo.INSERT_ONE('plaza_de_mercado', {
            name: data,
            cant: cant_result,
            _updated: new Date()
        })

        return cant_result

    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    get_request
}