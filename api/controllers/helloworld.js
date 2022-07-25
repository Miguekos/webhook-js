const { response } = require('express');
// const { publishRabbitMq } = require('../../utils/rabbitmq');
const clienteMongo = require('../database/mongo');

const helloworld = async (req, res = response) => {
  try {
    return res.statusCode(200).json('asd');
  } catch (error) {
    console.log(error);
    res.status(404).json({
      ok: false,
      msg: 'Error de envio de data',
    });
  }
};

module.exports = {
  helloworld,
};
