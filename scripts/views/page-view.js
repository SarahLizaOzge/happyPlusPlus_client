'use strict';

var app = app || {};

(function(module){

  var pageView = {};

  pageView.initIndexPage = () => {
    console.log('initIndexPage');
    // Hide the hideSelector if one was provided
    $('.container').hide();
    // Empty out the emptySelector if one was provided
    //$('ADD ID/CLASS').empty();
    // Show the showSelector if one was provided
    $('.main-view').show();
  };

  pageView.firstPage = () => {
    // Hide the hideSelector if one was provided
    $('.container').hide();
    // Empty out the emptySelector if one was provided
    //$('ADD ID/CLASS').empty();
    // Show the showSelector if one was provided
    console.log('you are in firstPage');
    $('.button1').on('click', function() {
      $('.container').hide();
      $('.first-view').show();
      let template = Handlebars.compile($('.video-view-template').text());
      $('#first-view').append(template());
    });
  };

  pageView.secondPage = () => {
    // Hide the hideSelector if one was provided
    $('.container').hide();
    // Empty out the emptySelector if one was provided
    // $('ADD ID/CLASS').empty();
    // Show the showSelector if one was provided
    console.log('you are in second page');
    $('.button2').on('click', function() {
      $('.container').hide();
      $('.second-view').show();
      let template = Handlebars.compile($('.video-view-template').text());
      $('#second-view').append(template());
    });
  };

  pageView.thirdPage = () => {
    // Hide the hideSelector if one was provided
    $('.container').hide();
    // Empty out the emptySelector if one was provided
    //$('ADD ID/CLASS').empty();
    // Show the showSelector if one was provided
    console.log('you are in third page');
    $('.button3').on('click', function() {
      $('.container').hide();
      $('.third-view').show();
      let template = Handlebars.compile($('.video-view-template').text());
      $('#third-view').append(template());
    });
  };

  pageView.signUpPage = () => {
    $('.container').hide();
    $('.user-view').show();
    $('#user-form').show();
    $('#user-form').on('submit', module.pageView.submit);
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