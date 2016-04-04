(function() {
  'use strict';
  angular.module('en-senas').controller('SituationsCtrl', situationsCtrl);

  function situationsCtrl($scope, situations) {
    $scope.situations = situations.getAll();
  }
})();
