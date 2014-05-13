'use strict';
/* global app:true */

var app = angular
    .module('angNewsApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'firebase'
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