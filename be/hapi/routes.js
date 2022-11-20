const routes = [
  {
    method: '*',
    path: '/',
    handler: (req, h) => {
      return 'Hompeage cannot be access with this method';
    },
  },
  {
    method: 'GET',
    path: '/',
    handler: (req, h) => {
      return 'Homepage';
    },
  },
  {
    method: 'POST',
    path: '/login',
    handler: (req, h) => {
      const { username, password } = req.payload;
      console.log(password);
      return `Welcome, ${username}`;
    },
  },
  {
    method: 'GET',
    path: '/user/{username?}',
    handler: (req, h) => {
      //path parameter, with 'stranger' as default of parameter value
      const { username = 'stranger'} = req.params;
      
      //query parameter
      const { lang } = req.query;
      
      if(lang === 'id') {
        return `Halo, ${username}! Selamat Datang di Aplikasi ini`;
      }
      
      return `Hi, ${username}! Welcome to this app`;
    },
  },
  {
    method: '*',
    path: '/about',
    handler: (req, h) => {
      return 'About page cannot be access with this method';
    },
  },
  {
    method: 'GET',
    path: '/about',
    handler: (req, h) => {
      return `About Page`;
    },
  },
  {
    method: '*',
    path: '/{any*}',
    handler: (req, h) => {
      return 'Page not found';
    },
  },
];

module.exports = routes;
