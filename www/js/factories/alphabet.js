(function() {
  'use strict';
  angular.module('en-senas').factory('alphabet', alphabet);

  function alphabet() {
    return {
      getAll : getAll
    };

    function getAll() {
      return [
        {char: 'A'},
        {char: 'B'},
        {char: 'C'},
        {char: 'D'},
        {char: 'E'},
        {char: 'F'},
        {char: 'G'},
        {char: 'H'},
        {char: 'I'},
        {char: 'J'},
        {char: 'K'},
        {char: 'L'},
        {char: 'M'},
        {char: 'N'},
        {char: 'Ñ'},
        {char: 'O'},
        {char: 'P'},
        {char: 'Q'},
        {char: 'R'},
        {char: 'S'},
        {char: 'T'},
        {char: 'U'},
        {char: 'V'},
        {char: 'W'},
        {char: 'X'},
        {char: 'Y'},
        {char: 'Z'},
      ];
    }
  }
})();
