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

  pageView.loginPage = () => {
    console.log('you are in login page');
    $('#user-login').on('click', function() {
      console.log('you are in function');
      $('.user-view').show();
    });
  };
  
  pageView.initAddUserPage = () => {
    $('.user-view').show();
    $('#user-form').show();
    $('.main-view').hide();
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




  module.pageView=pageView;
})(app);