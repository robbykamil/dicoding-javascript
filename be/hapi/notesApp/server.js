const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async() => {
  const Server = Hapi.server({
    host: 'localhost',
    port: 5000,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });
  
  Server.route(routes);
  await Server.start();
  console.log(`Connected to ${Server.info.uri}`);
};

init();
