(function() {
  'use strict';

  angular.module('en-senas').controller('AlphabetCtrl', alphabetCtrl);

  function alphabetCtrl($scope, alphabet) {
    $scope.letters = alphabet.getAll();
  }
})();
