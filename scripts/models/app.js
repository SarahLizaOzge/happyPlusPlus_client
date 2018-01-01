'use strict';

var app = app || {};

(function (module){
  //var __API_URL__ = 'http://localhost:3000';
  var __API_URL__ = 'https://sb-lo-ob-happyplusplus.herokuapp.com';

  // Still need to add .catch and pass through this function, example: .catch(errorCallback)
  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }
})(app);