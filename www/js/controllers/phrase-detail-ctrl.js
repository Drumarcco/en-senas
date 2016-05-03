(function() {
  'use strict';
  angular.module('en-senas').controller('PhraseDetailCtrl', PhraseDetailCtrl);

  function PhraseDetailCtrl($scope, $stateParams, situations) {
    $scope.phrase = situations.getPhrase($stateParams.phraseId);
  }
})();
