(function() {
  'use strict';
  angular.module('en-senas').controller('SituationDetailCtrl', SituationDetailCtrl);

  function SituationDetailCtrl($scope, $stateParams, situations) {
    $scope.situation = situations.get($stateParams.id);
  }
})();
