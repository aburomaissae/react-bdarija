const notifications = require('./notifications/notifications.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(notifications);
};
