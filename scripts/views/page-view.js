'use strict';

var app = app || {};

(function(module){

  var pageView = {};

  $('.topnav').on('click', function (event) {
    $('.topnav').show();

    $('.topnav').slideToggle(350);

  });

  function resetView() {
    console.log('reset view function fired');
    // $('.topnav').slideToggle(350);
    $('.topnav').show();
  }

  pageView.initIndexPage = () => {
    console.log('initIndexPage');
    resetView();
    // Hide the hideSelector if one was provided
    $('.container').hide();
    // Empty out the emptySelector if one was provided
    $('#main-view').empty();
    // Show the showSelector if one was provided
    $('.main-view').show();
    // $('.menu').on('click', function(){
    //   console.log('menu click', this);
    //   $('.active').hide();
    // });
  };

  pageView.firstPage = () => {
    resetView();
    // Hide the hideSelector if one was provided
    $('.container').hide();
    $('#first-view').empty();
    console.log('you are in firstPage');
    $('.first-view').show();
    app.allVideos.map(video => $('#first-view').append(video.toHtml()));
    $('.favorite-button').on('click', function(){
      console.log('button-pressed: ', this.id);
      app.addToFavorites(localStorage.username, app.allVideos[this.id]);
    });
    setTimeout(() => { ($('.is-active').fadeOut('slow')); }, 1000);
  };

  pageView.secondPage = () => {
    resetView();
    // Hide the hideSelector if one was provided
    $('.container').hide();
    $('#second-view').empty();
    console.log('you are in secondPage');
    $('.second-view').show();
    app.allVideos.map(video => $('#second-view').append(video.toHtml()));
    $('.favorite-button').on('click', function () {
      console.log('button-pressed: ', this.id);
      app.addToFavorites(localStorage.username, app.allVideos[this.id]);
    });
    setTimeout(() => { ($('.is-active2').fadeOut('slow')); }, 1000);
  };

  pageView.thirdPage = () => {
    resetView();
    // Hide the hideSelector if one was provided
    $('.container').hide();
    $('#third-view').empty();
    console.log('you are in thirdPage');
    $('.third-view').show();
    app.allVideos.map(video => $('#third-view').append(video.toHtml()));
    $('.favorite-button').on('click', function () {
      console.log('button-pressed: ', this.id);
      app.addToFavorites(localStorage.username, app.allVideos[this.id]);
    });
    setTimeout(() => { ($('.is-active3').fadeOut('slow')); }, 1000);
  };

  pageView.fourthPage = () => {
    resetView();
    // Hide the hideSelector if one was provided
    $('.container').hide();
    $('#fourth-view').empty();
    console.log('you are in fourthPage');
    $('.fourth-view').show();
    app.allVideos.map(video => $('#fourth-view').append(video.toHtml()));
    $('.favorite-button').on('click', function () {
      console.log('button-pressed: ', this.id);
      app.addToFavorites(localStorage.username, app.allVideos[this.id]);
    });
    setTimeout(() => { ($('.is-active4').fadeOut('slow')); }, 1000);
  };

  pageView.initFavoritePage = ctx => {
    resetView();
    // Hide the hideSelector if one was provided
    $('.container').hide();
    // Show the showSelector if one was provided
    console.log('This is the list of favorite videos');
    $('.favorite-view').show();
    $('#favorite-view').empty();
    let template = Handlebars.compile($('#video-favorite-template').text());
    console.log('favorite videos', ctx.favoriteVideos);
    ctx.favoriteVideos.map(ele => $('#favorite-view').append(template(ele)));
    $('.delete').on('click', function() {
      console.log('deleted', `${localStorage.username} and ${this.id}`);
      app.deleteFavorite(localStorage.username, this.id);
    });
  };

  pageView.initSignUpPage = () => {
    resetView();
    $('.container').hide();
    $('.user-view').show();
    $('#user-form').show();
    $('#user-form').on('submit', module.pageView.submit);
  };

  pageView.initAboutPage = () => {
    resetView();
    // Hide the hideSelector if one was provided
    $('.container').hide();
    // Show the showSelector if one was provided
    console.log('about view');
    $('.about-view').show();
  };

  pageView.submit = event => {
    console.log(event.target.username);
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