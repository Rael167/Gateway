const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Middleware para registrar todas las solicitudes
app.use((req, res, next) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    next();
});

// Configurar el proxy para redirigir todas las solicitudes a http://localhost:3000
app.use('/', createProxyMiddleware({
    target: 'http://localhost:3000',
    changeOrigin: true,
}));

// Iniciar el servidor en el puerto 4000
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Gateway running on port ${PORT}`);
});
