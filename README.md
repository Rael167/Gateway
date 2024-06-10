Este proyecto es un gateway HTTP/HTTPS simple construido con Express.js y el middleware http-proxy-middleware. El gateway se utiliza para dirigir y redirigir las solicitudes HTTP/HTTPS entrantes a diferentes servicios backend basados en la ruta de la solicitud.

Para iniciar el servidor del gateway, ejecuta el siguiente comando:

bash
Copy code
npm start
El gateway se ejecutará en el puerto 4000 por defecto. Puedes cambiar el puerto modificando la variable PORT en el archivo index.js.

Registro de Solicitudes
El gateway está configurado para registrar todas las solicitudes entrantes. Los registros se mostrarán en la consola mientras el servidor esté en funcionamiento.
