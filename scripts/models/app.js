'use strict';

var app = app || {};
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;


(function (module){
  var __API_URL__ = 'http://localhost:3000';
  //var __API_URL__ = 'https://sb-lo-ob-happyplusplus.herokuapp.com';
  
  let motivationList = $.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&q=motivation+ted+talk&type=video&videoDefinition=high&key=${YOUTUBE_API_KEY}`);

  // Still need to add .catch and pass through this function, example: .catch(errorCallback)
  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }
})(app);