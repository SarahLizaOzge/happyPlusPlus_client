'use strict';

var app = app || {};

(function(module){

  var pageView = {};

  pageView.initIndexPage = () => {
    console.log('initIndexPage');
    // Hide the hideSelector if one was provided
    //$('.container').hide();
    // Empty out the emptySelector if one was provided
    //$('ADD ID/CLASS').empty();
    // Show the showSelector if one was provided
    //$('ADD ID/CLASS').show();
  };

  pageView.firstPage = () => {
    // Hide the hideSelector if one was provided
    //$('.container').hide();
    // Empty out the emptySelector if one was provided
    //$('ADD ID/CLASS').empty();
    // Show the showSelector if one was provided
    //$('ADD ID/CLASS').show();
  };

  pageView.secondPage = () => {
    // Hide the hideSelector if one was provided
    // $('.container').hide();
    // Empty out the emptySelector if one was provided
    //$('ADD ID/CLASS').empty();
    // Show the showSelector if one was provided
    //$('ADD ID/CLASS').show();
  };

  pageView.thirdPage = () => {
    // Hide the hideSelector if one was provided
    //$('.container').hide();
    // Empty out the emptySelector if one was provided
    //$('ADD ID/CLASS').empty();
    // Show the showSelector if one was provided
    //$('ADD ID/CLASS').show();
  };


  module.pageView=pageView;
})(app);