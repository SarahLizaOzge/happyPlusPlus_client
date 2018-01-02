'use strict';

var app = app || {};




(function (module){
  var __API_URL__ = 'http://localhost:3000';
  //var __API_URL__ = 'https://sb-lo-ob-happyplusplus.herokuapp.com';

  function Video(rawVideoObj) {
    Object.keys(rawVideoObj).forEach(key => this[key] = rawVideoObj[key]);
  }

  module.allVideos=[];

  // module.rawVideos = $.get(`${__API_URL__}/api/v1/videos/search?part=snippet&order=viewCount&q=motivation+ted+talk&type=video&videoDefinition=high`);

  // module.rawVideos.responseJSON.items.map(ele => module.allVideos.push(new Video(ele)));


  module.getVideos = () => {

    $.get(`${__API_URL__}/api/v1/videos/search?part=snippet&order=viewCount&q=motivation+ted+talk&type=video&videoDefinition=high`)
      .then(result => console.log(result.items.map(ele=> {
        module.allVideos.push(new Video (ele));
        console.log(ele.id.videoId);
      })))
      .catch(errorCallback);
  };



  // Still need to add .catch and pass through this function, example: .catch(errorCallback)
  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }
})(app);
