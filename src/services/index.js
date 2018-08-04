const message = require('./message/message.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(message);
};
