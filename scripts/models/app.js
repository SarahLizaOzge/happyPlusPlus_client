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


  User.getUserInfo = (ctx, callback) =>{
    let username = localStorage.username;
    $.get(`${__API_URL__}/api/v1/users/${username}`)
      .then(results => ctx.user = results[0])
      .then(callback)
      .catch(errorCallback);
  };

  User.create = user => {
    $.post(`${__API_URL__}/api/v1/users`, user)
      .then(()=> page('/'));
  };

  User.checkLogin = (username, password) => {
    $.ajax({
      url:`${__API_URL__}/api/v1/login`,
      method:`GET`,
      data: {
        username: username,
        password: password
      },
      success: function(){
        console.log('LOGGED IN');
        localStorage.loggedin = true;
        localStorage.username = username;
        $('#users-update').show();
        
      },
      error: function(){
        localStorage.loggedin = false;
        localStorage.username = undefined;
        console.log('CANNOT LOGIN');
      },
    })
      .then(() => page('/'));
  };

  User.update = (username, userdata) =>{
    $.ajax({
      url:`${__API_URL__}/api/v1/users/${username}`,
      method:`PUT`,
      data: userdata,
      success: function(){
        $('#update-message').empty();
        $('#update-message').append('updated user info succesfully');
      }
    })
      .then(() => page(`/users/update`))
      .catch(errorCallback);
  };



  module.User = User;
})(app);