const { Server } = require("socket.io");

const io = new Server({
    cors: {
        origin: ["http://127.0.0.1:8080", "http://localhost:8080", "https://cocina.apps.com.pe", "http://cocina.apps.com.pe", "http://cocina.apps.com.pe:3000", "https://gps.test", "http://gps.test"],
        methods: ["GET", "POST"],
        allowedHeaders: ["template-header"],
        credentials: true
    }
});

io.on("connection", (socket) => {
    console.log("new cliente", socket.id);
});

module.exports = io.listen();