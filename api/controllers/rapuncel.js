const { response } = require('express');
// const { publishRabbitMq } = require('../../utils/rabbitmq');
const clienteMongo = require('../database/mongo');

const webhook = async (req, res = response) => {
  try {
    const body = req.body;
    console.log('🚀 ~ file: rapuncel.js ~ line 8 ~ webhook ~ body', body);
    await clienteMongo.INSERT_ONE('rapuncel', body);
    global.io.emit('woorapuncel', body);
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
