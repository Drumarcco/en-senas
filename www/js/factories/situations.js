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
          {id: 1, description: 'Busco un restaurante', videoUrl: ''},
          {id: 2, description: 'Busco el baño', videoUrl: ''},
          {id: 3, description: '¿Dónde puedo tomar un autobus?', videoUrl: ''},
          {id: 4, description: '¿Cómo llego a ...?', videoUrl: ''},
        ]
      },
      {
        id: 3,
        name: 'Comida',
        description: 'Ordenando algo para satisfacer el apetito.',
        icon: 'fa-cutlery',
        phrases: [
          {id: 1, description: 'Me gustaría ver el menú', videoUrl: ''},
          {id: 2, description: '¿Cuál es la especialidad?', videoUrl: ''},
          {id: 3, description: '¿Me puede traer la cuenta?', videoUrl: ''},
          {id: 4, description: '¿Qué tiene de tomar?', videoUrl: ''},
        ]
      },
    ];

    return {
      getAll: getAll,
      get: get
    };

    function getAll() {
      return situations;
    }

    function get(id) {
      return _.filter(situations, predicate)[0];

      function predicate(situation) {
        return situation.id == id;
      }
    }

    function getPhrases(id) {

    }
  }
})();
