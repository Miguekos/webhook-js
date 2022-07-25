const { response } = require('express');
// const { publishRabbitMq } = require('../../utils/rabbitmq');
const clienteMongo = require('../database/mongo');

const webhook = async (req, res = response) => {
  try {
    await clienteMongo.INSERT_ONE('rapuncel', req.body);
    global.io.emit('woorapuncel', req.body)
    return res.status(200).json('WebhookInsertado');
  } catch (error) {
    console.log(error);
    res.status(404).json({
      ok: false,
      msg: 'Error de envio de data',
    });
  }
};

const getwebhook = async (req, res = response) => {
  try {
    return res.status(200).json(await clienteMongo.GET_ALL('rapuncel', {}));
  } catch (error) {
    console.log(error);
    res.status(404).json({
      ok: false,
      msg: 'Error de envio de data',
    });
  }
};

module.exports = {
  getwebhook,
  webhook,
};
