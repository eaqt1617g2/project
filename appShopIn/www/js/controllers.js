var BASE_URL = "http://localhost:2709";

angular.module('app.controllers', [])

.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('lastMinuteDefaultPageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('perfilDefaultPageCtrl', ['$scope', '$http', '$ionicPopup', '$state', function ($scope, $http, $ionicPopup, $state) {


  //console.log('logueado', $scope.usuario );
  $scope.users = {};
  $scope.usuario = {};
  $scope.items = {};

  $scope.getUsers = function(){
    $http.get(BASE_URL + '/users').success(function (data) {
      $scope.users = data;
      console.log("Usuarios", $scope.users);
    })
      .error(function (data) {
        console.log('Error: ' + data);
        var alertPopup = $ionicPopup.alert({
          title: 'No accedes a usuarios!',
          template: 'Introduce bien los datos!'
        });
      });
  }

  $scope.getUsersOrder = function() {
    $http.get(BASE_URL + '/users/order').success(function(data) {
      $scope.users = {};
      $scope.users = data;
      console.log("Usuarios", $scope.users);
    })
      .error(function (data) {
        console.log('Error: ' + data);
        var alertPopup = $ionicPopup.alert({
          title: 'No accedes a usuarios!',
          template: 'Introduce bien los datos!'
        });
      });
  };

  $scope.selectUser = function(user){

    $http.get(BASE_URL + '/users/'+user._id).success(function(data) {
      $scope.usuario = user;
      $scope.users = {};
      console.log("Usuario", $scope.usuario);
    })
      .error(function (data) {
        console.log('Error: ' + data);
        var alertPopup = $ionicPopup.alert({
          title: 'No accedes a usuarios!',
          template: 'Introduce bien los datos!'
        });
      });
  }


  $scope.getItems = function(){
    console.log("Loginid", $scope.usuario.loginid);
    $http.get(BASE_URL + '/users/'+$scope.usuario.loginid+'/items').success(function (data) {
      $scope.items = {};
      $scope.users = {};
      $scope.items = data;
      console.log("Items", $scope.items);
    })
      .error(function (data) {
        console.log('Error: ' + data);
        var alertPopup = $ionicPopup.alert({
          title: 'No accedes a items!',
          template: 'Introduce bien los datos!'
        });
      });
  }

  $scope.getItemsOrder = function(){
    $http.get(BASE_URL + '/items/order').success(function (data) {
      $scope.items = {};
      $scope.users = {};
      $scope.items = data;
      console.log("Items", $scope.items);
    })
      .error(function (data) {
        console.log('Error: ' + data);
        var alertPopup = $ionicPopup.alert({
          title: 'No accedes a items!',
          template: 'Introduce bien los datos!'
        });
      });
  }

}])

.controller('detailDefaultPageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('discoverDefaultPageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('friendsDefaultPageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('loginCtrl', ['$scope', '$http', '$ionicPopup', '$stateParams', function ($scope, $http, $ionicPopup, $stateParams) {

  $scope.User = {};

  $scope.loginNormal = function(){
    console.log('user', $scope.User );
    var userLogin = {
      email : $scope.User.email,
      password : $scope.User.password
    };
    $http.post(BASE_URL + '/login', userLogin).success(function (data) {
      console.log("User Logged", data);
      window.sessionStorage.setItem("user", JSON.stringify(data));
      $scope.usuario = data;
      $state.go('tab.mapa', {}, {reload: true});
    })
      .error(function (data) {
        console.log('Error: ' + data);
        var alertPopup = $ionicPopup.alert({
          title: 'No se ha logueado correctamente!',
          template: 'Introduce bien los datos!'
        });
      });
  }

}])

.controller('registerCtrl', ['$scope', '$http', '$ionicPopup', '$stateParams', function ($scope, $http, $ionicPopup, $stateParams) {

  $scope.newUser = {};

  // Función para registrar estudiante
   $scope.createUser = function(){
     if ($scope.newUser.password == $scope.newUser.confirm_password) {
       console.log('user', $scope.newUser);
       console.log('url', BASE_URL);
       var postUser = {
         loginid: $scope.newUser.loginid,
         name: $scope.newUser.name,
         last_name: $scope.newUser.last_name,
         password: $scope.newUser.password,
         email: $scope.newUser.email
       };
       $http.post(BASE_URL + '/users', postUser)
          .success(function (data) {
            $scope.newUser = {}; // Borramos los datos del formulario
            console.log('Registrado correctamente');
            var alertPopup = $ionicPopup.alert({
             title: 'Información',
             template: 'Registrado correctamente'
            });
          })
         .error(function (data) {
           console.log('Error: ' + data);
           var alertPopup = $ionicPopup.alert({
             title: 'Información',
             template: 'Revisa el formulario'
           });
           $timeout(function () {
             alertPopup.close(); //close the popup after 3 seconds for some reason
           }, 3000);
         });
     }
     else {
       var alertPopup = $ionicPopup.alert({
         title: 'Please repeat the password!'
       });
       $timeout(function () {
         alertPopup.close(); //close the popup after 3 seconds for some reason
       }, 3000);
     }
  };

}])
