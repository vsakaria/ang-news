'use strict';

app.controller('ViewPostCtrl', function($scope, $routeParams, Post) {
    $scope.post = Post.find($routeParams.postId);
  });