const Hapi = require('@hapi/hapi');
const routes = require(./routes);

const init = async () => {
  //Hapi.server() reflection to HTTP Server
  const server = Hapi.server({
    //'ServerOptions'object parameter
    host: 'localhost',
    port: 5000,
  });
  
  //Routes Configuration
  server.route(routes);
  
  //Server run asynchronously
  await server.start();
  console.log(`Connected to Server ${server.info.uri}`);
}


init();
