'use strict';

app.controller('ModalDemoCtrl',[ '$scope', '$modal', function ($scope, $modal) {
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
