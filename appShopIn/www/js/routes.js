angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



  .state('tabsControllerLogin', {
      url: '/login',
      templateUrl: 'templates/tabsControllerLogin.html',
      abstract:true
  })

  .state('tabsControllerLogin.login', {
      url: '/access',
      views: {
          'tab1': {
              templateUrl: 'templates/login.html',
              controller: 'loginCtrl'
          }
      }
  })

  .state('tabsControllerLogin.register', {
      url: '/register',
      views: {
          'tab2': {
              templateUrl: 'templates/register.html',
              controller: 'registerCtrl'
          }
      }
  })

  .state('tabsController', {
      url: '/tabsController',
      templateUrl: 'templates/tabsController.html',
      abstract:true
  })

  .state('tabsController.lastMinuteDefaultPage', {
    url: '/lastMinute',
      views: {
          'tab1': {
              templateUrl: 'templates/lastMinuteDefaultPage.html',
              controller: 'lastMinuteDefaultPageCtrl'
          }
      }
  })

  .state('tabsController.discoverDefaultPage', {
      url: '/discover',
      views: {
          'tab2': {
              templateUrl: 'templates/discoverDefaultPage.html',
              controller: 'discoverDefaultPageCtrl'
          }
      }
  })

  .state('tabsController.friendsDefaultPage', {
      url: '/friends',
      views: {
          'tab3': {
              templateUrl: 'templates/friendsDefaultPage.html',
              controller: 'friendsDefaultPageCtrl'
          }
      }
  })

  .state('tabsController.usersDefaultPage', {
      url: '/users/:loginid',
      views: {
        'tab1': {
          templateUrl: 'templates/usersDefaultPage.html',
          controller: 'usersDefaultPageCtrl'
        }
      }
  })

  .state('tabsController.perfilDefaultPage', {
    url: '/perfil/:loginid',
    views: {
      'tab1': {
        templateUrl: 'templates/perfilDefaultPage.html',
        controller: 'perfilDefaultPageCtrl'
      }
    }
  })

  .state('tabsController.detailDefaultPage', {
    url: '/detail/:id',
    views: {
      'tab1': {
        templateUrl: 'templates/detailDefaultPage.html',
        controller: 'detailDefaultPageCtrl'
      }
    }
  })

  .state('tabsController.searchDefaultPage', {
    url: '/search',
    views: {
      'tab1': {
        templateUrl: 'templates/search.html',
        controller: 'searchCtrl'
      }
    }
  })

  .state('tabsController.herramientasDefaultPage', {
    url: '/herramientas',
    views: {
      'tab1': {
        templateUrl: 'templates/herramientas.html',
        controller: 'herramientasCtrl'
      }
    }
  })

    .state('tabsController.crearItem', {
      url: '/crearItem',
      views: {
        'tab1': {
          templateUrl: 'templates/crearItem.html',
          controller: 'crearItemCtrl',
          controllerAs: 'vm'
        }
      }
    })



$urlRouterProvider.otherwise('/login/access')



});
