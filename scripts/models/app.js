'use strict';

var app = app || {};

(function (module){
  var __API_URL__ = 'http://localhost:3000';
  //var __API_URL__ = 'https://sb-lo-ob-happyplusplus.herokuapp.com';

  // Still need to add .catch and pass through this function, example: .catch(errorCallback)
  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }

  function User(rawUserObj) {
    Object.keys(rawUserObj).map(key => this[key] = rawUserObj[key]);
  };

  User.prototype.toHtml = function(templateId) {
    return Handlebars.compile($(`#${templateId}`).text())(this);
  };

  User.all = [];

  User.loadAll = rows => User.all = rows.sort((a, b) => a.title - b.title).map(user => new User(user));
  User.create = user => {
    $.post(`${__API_URL__}/api/v1/users`, user)
      .then(()=> page('/'));
  };



  module.User = User;
})(app);