angular.module('en-senas', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })
    .state('tab.about', {
      url: '/about',
      views: {
        'tab-about': {
          templateUrl: 'templates/tab-about.html'
        }
      }
    })
    .state('tab.alphabet', {
      url: '/alphabet',
      views: {
        'tab-alphabet': {
          templateUrl: 'templates/tab-alphabet.html',
          controller: 'AlphabetCtrl'
        }
      }
    })
    .state('tab.situations', {
      url: '/situations',
      views: {
        'tab-situations': {
          templateUrl: 'templates/tab-situations.html',
          controller: 'SituationsCtrl'
        }
      }
    })
    .state('tab.situation-detail', {
      url: '/situations/:id',
      views: {
        'tab-situations': {
          templateUrl: 'templates/tab-situation-detail.html',
          controller: 'SituationDetailCtrl'
        }
      }
    });

  $urlRouterProvider.otherwise('/tab/alphabet');
});
