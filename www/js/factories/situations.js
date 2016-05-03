(function() {
  'use strict';
  angular.module('en-senas').factory('situations', situations);

  function situations() {
    var situations = [
      {
        id: 1,
        name: 'Hospital',
        description: 'Frases de uso común dentro de un hospital',
        icon: 'fa-hospital-o',
        phrases: [
          {id: 1, description: 'Dolor de estómago', videoUrl: ''},
          {id: 2, description: 'Dolor de garganta', videoUrl: ''},
          {id: 3, description: 'Tengo fiebre', videoUrl: ''},
          {id: 4, description: 'Necesito medicamentos', videoUrl: ''},
          {id: 5, description: 'Tengo vómito', videoUrl: ''}
        ]
      },
      {
        id: 2,
        name: 'Direcciones',
        description: 'Cómo preguntar por lugares o direcciones.',
        icon: 'fa-compass',
        phrases: [
          {id: 6, description: 'Busco un restaurante', videoUrl: ''},
          {id: 7, description: 'Busco el baño', videoUrl: ''},
          {id: 8, description: '¿Dónde puedo tomar un autobus?', videoUrl: ''},
          {id: 9, description: '¿Cómo llego a ...?', videoUrl: ''},
        ]
      },
      {
        id: 3,
        name: 'Comida',
        description: 'Ordenando algo para satisfacer el apetito.',
        icon: 'fa-cutlery',
        phrases: [
          {id: 10, description: 'Me gustaría ver el menú', videoUrl: ''},
          {id: 11, description: '¿Cuál es la especialidad?', videoUrl: ''},
          {id: 12, description: '¿Me puede traer la cuenta?', videoUrl: ''},
          {id: 13, description: '¿Qué tiene de tomar?', videoUrl: ''},
        ]
      },
    ];

    return {
      getAll: getAll,
      get: get,
      getPhrase: getPhrase
    };

    function getAll() {
      return situations;
    }

    function get(id) {
      return _.find(situations, predicate);

      function predicate(situation) {
        return situation.id == id;
      }
    }

    function getPhrase(id) {
      var situation = _.find(situations, function(situation) {
        return _.some(situation.phrases, function(phrase) {
          return phrase.id == id;
        });
      });

      return _.find(situation.phrases, function(phrase) {
        return phrase.id == id;
      });
    }
  }
})();
