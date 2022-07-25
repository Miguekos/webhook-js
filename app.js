const express = require('express');
const app = express();
var http = require('http').Server(app);
const prefix = `${process.env.PREFIX}`;
var io = require('socket.io')(http, {
  path: `/${prefix}/websocket`,
  cors: {
    origin: [
      'http://127.0.0.1:8080',
      'http://localhost:8080',
      'https://wooadmin.apps.com.pe',
    ],
    methods: ['GET', 'POST'],
    // allowedHeaders: ['template-header'],
    credentials: true,
  },
  pingTimeout: 180000,
  pingInterval: 25000,
});
global.io = io;
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
app.use(express.static(__dirname + '/public'));

// Load environment variables from .env file, where API keys and passwords are configured.
// dotenv.config({ path: `.env.${process.env.NODE_ENV}` });
dotenv.config();

// Usamos body-parse para revisar el body cuando los request son post
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// MIDDLEWARE
app.use(cors());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

// CONTROLLERS
// const { validador_de_pedidos } = require('./api/controllers/validador_de_pedidos')

app.use(`/${prefix}/`, require('./api/routes/helloworld'));
app.use(`/${prefix}/`, require('./api/routes/rapuncel'));

// load queue
// validador_de_pedidos()

// REGISTER HOST AND PORT
app.disable('x-powered-by');
app.set('port', process.env.PORT);
app.set('host', process.env.NODEJS_IP);

// SERVER ON.
http.listen(app.get('port'), app.get('host'), () => {
  console.log(`MS on http://${app.get('host')}:${app.get('port')}`);
});
