
const server = require('./config/server.js');
require('./config/database');

server.listen(server.get('port'), () => {
  console.log('Server is running on port:', server.get('port'));
});
