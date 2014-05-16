'use strict';

app.controller('ViewPostCtrl', ['$scope', '$routeParams', 'Post', function($scope, $routeParams, Post) {
    $scope.post = Post.find($routeParams.postId);
  }]);