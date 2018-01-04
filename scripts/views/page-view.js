'use strict';

var app = app || {};

(function(module){

  var pageView = {};

  pageView.initIndexPage = () => {
    console.log('initIndexPage');
    // Hide the hideSelector if one was provided
    $('.container').hide();
    // Empty out the emptySelector if one was provided
    $('#main-view').empty();
    // Show the showSelector if one was provided
    $('.main-view').show();
  };

  pageView.firstPage = () => {
    // Hide the hideSelector if one was provided
    $('.container').hide();
    $('#first-view').empty();
    console.log('you are in firstPage');
    $('.first-view').show();
    app.allVideos.map(video => $('#first-view').append(video.toHtml()));
    console.log(app.allVideos[0]);
    app.allVideos = [];
    console.log(app.allVideos);

    $('.favorite-button').on('click', function(){
      console.log('button-pressed: ', this.id);
      app.addToFavorites(localStorage.username, app.allVideos[this.id]);
    });
    setTimeout(() => { ($('.is-active').fadeOut('slow')); }, 4000);
  };

  pageView.secondPage = () => {
    // Hide the hideSelector if one was provided
    $('.container').hide();
    $('#second-view').empty();
    console.log('you are in secondPage');
    $('.second-view').show();
    app.allVideos.map(video => $('#second-view').append(video.toHtml()));
    console.log(app.allVideos[0]);
    app.allVideos = [];
    console.log(app.allVideos);

    $('.favorite-button').on('click', function () {
      console.log('button-pressed: ', this.id);
      app.addToFavorites(localStorage.username, app.allVideos[this.id]);
    });
    setTimeout(() => { ($('.is-active2').fadeOut('slow')); }, 6000);
  };

  pageView.thirdPage = () => {
    // Hide the hideSelector if one was provided
    $('.container').hide();
    $('#third-view').empty();
    console.log('you are in thirdPage');
    $('.third-view').show();
    app.allVideos.map(video => $('#third-view').append(video.toHtml()));
    console.log(app.allVideos[0]);
    app.allVideos = [];
    console.log(app.allVideos);

    $('.favorite-button').on('click', function () {
      console.log('button-pressed: ', this.id);
      app.addToFavorites(localStorage.username, app.allVideos[this.id]);
    });
    setTimeout(() => { ($('.is-active3').fadeOut('slow')); }, 4000);
  };

  pageView.fourthPage = () => {
    // Hide the hideSelector if one was provided
    $('.container').hide();
    $('#fourth-view').empty();
    console.log('you are in fourthPage');
    $('.fourth-view').show();
    app.allVideos.map(video => $('#fourth-view').append(video.toHtml()));
    console.log(app.allVideos[0]);
    app.allVideos = [];
    console.log(app.allVideos);

    $('.favorite-button').on('click', function () {
      console.log('button-pressed: ', this.id);
      app.addToFavorites(localStorage.username, app.allVideos[this.id]);
    });
    setTimeout(() => { ($('.is-active4').fadeOut('slow')); }, 4000);
  };

  pageView.initFavoritePage = () => {
    // Hide the hideSelector if one was provided
    $('.container').hide();
    // Show the showSelector if one was provided
    console.log('This is the list of favorite videos');
    $('.favorite-view').show();
  };

  pageView.initSignUpPage = () => {
    $('.container').hide();
    $('.user-view').show();
    $('#user-form').show();
    $('#user-form').on('submit', module.pageView.submit);
  };

  pageView.initAboutPage = () => {
    // Hide the hideSelector if one was provided
    $('.container').hide();
    // Show the showSelector if one was provided
    console.log('about view');
    $('.about-view').show();
  };

  pageView.submit = event => {
    event.preventDefault();
    let user = {
      username: event.target.username.value,
      password: event.target.password.value,
      email: event.target.email.value,
    };
    module.User.create(user);
  };

  pageView.initLoginPage = (ctx) =>{
    $('.container').hide();
    $('.user-login-view').show();
    $('#user-login-form').show();
    $('#user-login-form').on('submit', function(event){
      event.preventDefault();
      module.User.checkLogin(event.target.username.value, event.target.password.value);
    });
  };

  pageView.initUpdateUser = (ctx) => {
    $('.container').hide();
    $('.update-user-view').show();
    $('#update-user-form').show();
    $('#update-user-form input[name="email"]').val(ctx.user.email);
    $('#update-user-form input[name="username"]').val(ctx.user.username);

    $('#update-user-form').on('submit', function(event) {
      event.preventDefault();
      let userdata= {
        email: event.target.email.value,
      };
      let username = localStorage.username;
      module.User.update(username, userdata);
    });

  };
  pageView.initDeleteUser = (ctx) => {
    $('.container').hide();
    $('.delete-user-view').show();
    $('#delete-user-form').show();
    $('#delete-user-form input[name="email"]').val(ctx.user.email);
    $('#delete-user-form input[name="username"]').val(ctx.user.username);

    $('#delete-user-form').on('submit', function(event) {
      event.preventDefault();
      let userdata= {
        email: event.target.email.value,
      };
      let username = localStorage.username;
      module.User.destroy(username, userdata);
    });
  };
  module.pageView=pageView;
})(app);