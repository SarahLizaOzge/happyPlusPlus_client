'use strict';

var app = app || {};




(function (module){
  var __API_URL__ = 'http://localhost:3000';
  //var __API_URL__ = 'https://sb-lo-ob-happyplusplus.herokuapp.com';

  function Video(rawVideoObj) {
    Object.keys(rawVideoObj).forEach(key => this[key] = rawVideoObj[key]);
  }

  Video.prototype.toHtml = function() {
    let template = Handlebars.compile($('.video-view-template').text());
    return template(this);
  };
  Video.all = [];
  Video.loadAll = items => Video.all = items;

  module.allVideos=[];

  // module.rawVideos = $.get(`${__API_URL__}/api/v1/videos/search?part=snippet&order=viewCount&q=motivation+ted+talk&type=video&videoDefinition=high`);

  // module.rawVideos.responseJSON.items.map(ele => module.allVideos.push(new Video(ele)));


  module.getVideos = () => {

    $.get(`${__API_URL__}/api/v1/videos/search?part=snippet&order=viewCount&q=motivation+ted+talk&type=video&videoDefinition=high`)
      .then(result => result.items.map(ele=> {
        console.log(ele.id.videoId);
        module.allVideos.push(new Video (ele));
      }))
      // .then(data => console.log('here', data))
      .then(() => module.allVideos.map(ele => {
        console.log(ele, 'ele is whu');
        $('<iframe />', {
          name: 'myFrame',
          id: 'myFrame',
          width: '560',
          height: '315',
          src: `https://www.youtube.com/embed/${ele.id.videoId}`,
          gesture: 'media',
          allow: 'encrypted-media',
          allowfullscreen: true

        }).appendTo('.first-view');
      })
      )
      .catch(errorCallback);
  };



  // Still need to add .catch and pass through this function, example: .catch(errorCallback)
  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }
})(app);
