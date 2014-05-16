'use strict';
/* global app:true */

var app = angular
    .module('angNewsApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'ngAnimate',
        'firebase',
        'ui.bootstrap'
    ])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/posts.html',
                controller: 'PostsCtrl'
            })
            .when('/posts/:postId', {
                templateUrl: 'views/showpost.html',
                controller: 'ViewPostCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }])

.constant('FIREBASE_URL', 'https://scorching-fire-4068.firebaseio.com/');

app.directive(['post', function(post) {
  var controller = function($scope) {
    $scope.showAnswer = false;
  };

  return {
    restrict: 'C',
    scope: false,
    controller: controller
  };
}]);

app.animation('.answer-animation', function(){

  CSSPlugin.defaultTransformPerspective = 1000;

  TweenMax.set($("div.back"), {rotationX:-180});

  $.each($("div.box"), function(i,element)
  {
    console.log(element);
    var frontCard = $(this).children("div.front")
    var backCard = $(this).children("div.back")
    var tl = new TimelineMax({paused:true})

    tl
      .to(frontCard, 1, {rotationX:180})
      .to(backCard, 1, {rotationX:0},0)

    this.animation = tl;
  });

  return {
    beforeAddClass: function(element, className, done){
      if (className == 'answer') {
        var el = element.find('.box')[0];
        el.animation.play();
      }
      else {
        done();
      }
    },

    beforeRemoveClass: function(element, className, done) {
      if (className == 'answer') {
        var el = element.find('.box')[0];
        el.animation.reverse();
      }
      else {
        done();
      }
    }
  };
});

angular.element(document).ready(function () {
  TweenMax.set($("div.back"), {rotationX:-180});
});

