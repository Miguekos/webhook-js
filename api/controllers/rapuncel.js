const { response } = require('express');
// const { publishRabbitMq } = require('../../utils/rabbitmq');
const clienteMongo = require('../database/mongo');

const webhook = async (req, res = response) => {
  try {
    await clienteMongo.INSERT_ONE('rapuncel', req.body);
    return res.status(200).json('WebhookInsertado');
  } catch (error) {
    console.log(error);
    res.status(404).json({
      ok: false,
      msg: 'Error de envio de data',
    });
  }
};

module.exports = {
  webhook,
};
