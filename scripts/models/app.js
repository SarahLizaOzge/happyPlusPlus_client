'use strict';

var app = app || {};

(function (module){
  var __API_URL__ = 'http://localhost:3000';
  //var __API_URL__ = 'http://sb-lo-ob-happyplusplus.herokuapp.com';


  function errorCallback(err) {
    console.error(err);
    module.errorView.initErrorPage(err);
  }
  function Video(index, rawVideoObj) {
    this.index = index;
    Object.keys(rawVideoObj).forEach(key => this[key] = rawVideoObj[key]);
  }

  Video.prototype.toHtml = function() {
    let template = Handlebars.compile($('#video-view-template').text());
    return template(this);
  };
  Video.all = [];
  Video.loadAll = items => Video.all = items;

  module.allVideos=[];

  module.getUserVideos = (ctx, callback) => {
    $.get(`${__API_URL__}/api/v1/favorites/${ctx.user.username}`)
      .then(results => ctx.favoriteVideos = results)
      .then(callback)
      .catch(errorCallback);
  };
  

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // module.rawVideos = $.get(`${__API_URL__}/api/v1/videos/search?part=snippet&order=viewCount&q=motivation+ted+talk&type=video&videoDefinition=high`);

  // module.rawVideos.responseJSON.items.map(ele => module.allVideos.push(new Video(ele)));


  module.getVideos = (callback, query) => {
    module.allVideos=[];
    $.get(`${__API_URL__}/api/v1/videos/search?part=snippet&order=viewCount&q=${query}&type=video&videoDefinition=high`)
      .then(result => result.items.map((ele, index)=> {
        console.log(ele.id.videoId);
        module.allVideos.push(new Video (index, ele));
      }))
      .then(callback)
      .then(module.allVideos=[])
      .catch(errorCallback);
  };

  function User(rawUserObj) {
    Object.keys(rawUserObj).map(key => this[key] = rawUserObj[key]);
  }

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
      .then(()=> page('/'))
      .catch(errorCallback);
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
        $('#login').hide();
        $('#users-update').show();
        $('#users-delete').show();
        $('#users-favorite').show();
        $('#user-login').hide();

      },
      error: function(){
        localStorage.loggedin = false;
        localStorage.username = undefined;
        // console.log('CANNOT LOGIN');
      },
    })
      .then(() => page('/'))
      .catch(errorCallback);
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

  User.destroy = (username, userdata) => {
    $.ajax({
      url: `${__API_URL__}/api/v1/users/${username}`,
      method: 'DELETE',
      data: userdata,
      success: function(){
        $('#user-login').show();
        $('#login').show();
      }
    })
      .then(() => page('/'))
      .catch(errorCallback);
  };

  module.deleteFavorite = (username, video_url) =>{
    $.ajax({
      url: `${__API_URL__}/api/v1/deleteFavorite`,
      method: 'DELETE',
      data:{
        username:username,
        video_url: `${video_url}`,

      },
    })
      .then(() => page(`/users/favorite`))
      .catch(errorCallback);
  };




  module.addToFavorites = (username, video) =>{
    $.ajax({
      url:`${__API_URL__}/api/v1/addToFavorites`,
      method:`POST`,
      data: {
        username: username,
        video_url: `https://www.youtube.com/embed/${video.id.videoId}`,
        description: video.snippet.description,
        title: video.snippet.title,
        videoid: video.id.videoid
      },
    })
      .catch(errorCallback);
  };
  module.User = User;
})(app);
