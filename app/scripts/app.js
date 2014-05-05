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
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/posts.html',
                controller: 'PostsCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })

.constant('FIREBASE_URL', 'https://scorching-fire-4068.firebaseio.com/');