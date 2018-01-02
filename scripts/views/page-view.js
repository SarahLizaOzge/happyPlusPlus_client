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
      // let template = Handlebars.compile($('.video-view-template').text());
      // $('#first-view').append(template());
    });
  };

  pageView.secondPage = () => {
    // Hide the hideSelector if one was provided
    $('.container').hide();
    // Empty out the emptySelector if one was provided
    $('ADD ID/CLASS').empty();
    // Show the showSelector if one was provided
    console.log('you are in second page');
    $('.button2').on('click', function() {
      $('.container').hide();
      $('.second-view').show();
      let template = Handlebars.compile($('.video-view-template').text());
      $('#first-view').append(template());
    });
  };

  pageView.thirdPage = () => {
    // Hide the hideSelector if one was provided
    $('.container').hide();
    // Empty out the emptySelector if one was provided
    $('ADD ID/CLASS').empty();
    // Show the showSelector if one was provided
    $('ADD ID/CLASS').show();
  };


  module.pageView=pageView;
})(app);