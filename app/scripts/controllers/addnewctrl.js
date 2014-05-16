'use strict';

app.controller('ModalCtrl',[ '$scope', '$modal', function ($scope, $modal) {
  var modalInstance;

  $scope.open = function () {
    console.log('ok');
    modalInstance = $modal.open({
      templateUrl: 'myModalContent.html',
    });
  };

  $scope.ok = function () {
    $scope.$close($scope);
  };
}]);
