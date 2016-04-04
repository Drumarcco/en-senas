(function() {
  'use strict';
  angular.module('en-senas').factory('alphabet', alphabet);

  function alphabet() {
    return {
      getAll : getAll
    };

    function getAll() {
      return [
        {char: 'A', imgUrl: ''},
        {char: 'B', imgUrl: ''},
        {char: 'C', imgUrl: ''},
        {char: 'D', imgUrl: ''},
        {char: 'E', imgUrl: ''},
        {char: 'F', imgUrl: ''},
        {char: 'G', imgUrl: ''},
        {char: 'H', imgUrl: ''},
        {char: 'I', imgUrl: ''},
        {char: 'J', imgUrl: ''},
        {char: 'K', imgUrl: ''},
        {char: 'L', imgUrl: ''},
        {char: 'M', imgUrl: ''},
        {char: 'N', imgUrl: ''},
        {char: 'Ñ', imgUrl: ''},
        {char: 'O', imgUrl: ''},
        {char: 'P', imgUrl: ''},
        {char: 'Q', imgUrl: ''},
        {char: 'R', imgUrl: ''},
        {char: 'S', imgUrl: ''},
        {char: 'T', imgUrl: ''},
        {char: 'U', imgUrl: ''},
        {char: 'V', imgUrl: ''},
        {char: 'W', imgUrl: ''},
        {char: 'X', imgUrl: ''},
        {char: 'Y', imgUrl: ''},
        {char: 'Z', imgUrl: ''},
      ];
    }
  }
})();
