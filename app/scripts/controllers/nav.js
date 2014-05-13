'use strict';

app.controller('NavCtrl', [ '$scope', '$location', 'Post',
  function ($scope, $location, Post) {
    $scope.post = {url: 'http://', 'title': ''};

    $scope.submitPost = function () {
      Post.create($scope.post).then(function () {
        $location.path('/' );
        $scope.post = {url: 'http://', title: ''};
      });
    };
  }]);
