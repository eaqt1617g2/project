var BASE_URL = "http://localhost:2709";

angular.module('app.controllers', [])

.controller('menuCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {

}])

.controller('lastMinuteDefaultPageCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {

}])

.controller('perfilDefaultPageCtrl', ['$scope', '$http', '$ionicPopup', '$state', function ($scope, $http, $ionicPopup, $state) {

  $scope.UserID = ($state.params.loginid); //Obtenemos ID de la URI
  console.log("Usuarios", $scope.UserID);
  //console.log('logueado', $scope.usuario );
  $scope.users = {};
  $scope.items = {};
  $scope.usuario = {};

  $http.get(BASE_URL + '/users/'+$scope.UserID).success(function(data) {
    $scope.users = {};
    $scope.usuario = data;
    console.log("Usuario", $scope.usuario);
  })
    .error(function (data) {
      console.log('Error: ' + data);
      var alertPopup = $ionicPopup.alert({
        title: 'No accedes a usuarios!',
        template: 'Introduce bien los datos!'
      });
    });

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

  $scope.createItem = function () {
    $scope.newItem = {};
    console.log('Usuario: ' + $scope.usuario.loginid);
    var addPopup = $ionicPopup.confirm({
      title: 'Crear item nuevo',
      template: '<input type="text" placeholder="Titulo" ng-model="newItem.title"> <br> <input type="text" placeholder="Pic ID" ng-model="newItem.pic_id">',
      scope: $scope,
      buttons: [
        {text: 'Cancel'},
        {
          text: '<b>Crear</b>',
          type: 'button-positive',
          onTap: function () {
            var postItem = {
              title : $scope.newItem.title,
              author: $scope.usuario.loginid,
              pic_id: $scope.newItem.pic_id
            };
            $http.post(BASE_URL + '/items/additem', postItem)
              .success(function (data) {
                $scope.newItem = data;
                console.log('Item creado',$scope.newItem);

              })
              .error(function (data) {
                console.log('Error: ' + data);
                var alertPopup = $ionicPopup.alert({
                  title: 'No se ha creado el item!'
                });
              });
          }
        }
      ]
    });
  };


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

.controller('detailDefaultPageCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {

}])

.controller('searchCtrl', ['$scope', '$http', '$ionicPopup', '$state', '$stateParams', function ($scope, $http, $ionicPopup, $state, $stateParams) {

  $scope.filtro = {};
  $scope.users = {};
  $scope.usuario = {};
  $scope.usuarios = {};

  $scope.getUsersOrder = function() {
    $http.get(BASE_URL + '/users/order').success(function(data) {
      $scope.users = {};
      $scope.usuario = {};
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

  $scope.buscarUsuarioLoginid = function() {
    console.log($scope.filtro.loginid)
    $http.get(BASE_URL + '/users/'+ $scope.filtro.loginid)
      .success(function(data) {
        console.log($scope.filtro.loginid)
        $scope.filtro = {}; // Borramos los datos del formulario
        $scope.usuario = {};
        $scope.users = {};
        $scope.usuario = data;

      })
      .error(function(data) {
        console.log($scope.user)
        console.log('Error: ' + data);
      });
  };

}])

.controller('herramientasCtrl', ['$scope', '$http', '$ionicPopup', '$state','$stateParams', function ($scope, $http, $ionicPopup, $state, $stateParams) {

  $scope.usuario = {};
  $scope.newUser = {};
  $scope.filtro = {};

  $scope.buscarUsuarioLoginid = function() {
    console.log($scope.filtro.loginid)
    $http.get(BASE_URL + '/users/'+ $scope.filtro.loginid)
      .success(function(data) {
        $scope.filtro = {}; // Borramos los datos del formulario
        $scope.usuario = {};
        $scope.users = {};
        $scope.usuario = data;
      })
      .error(function(data) {
        console.log($scope.user)
        console.log('Error: ' + data);
      });
  };

  $scope.modificarUser = function() {
    var postUser = {
      name: $scope.newUser.name,
      last_name: $scope.newUser.last_name,
      password: $scope.newUser.password,
      email: $scope.newUser.email
    };
    console.log('PostUser: ' + postUser);
    $http.put(BASE_URL + '/users/'+ $scope.usuario._id, postUser).success(function(data) {
        $scope.newUser = {}; // Borramos los datos del formulario
        $scope.usuario = {};
        $scope.usuario = data;
        console.log($scope.usuario)
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };

  // Función para eliminar estudiante
  $scope.removeUser = function() {
    $http.delete(BASE_URL + '/users/'+ $scope.usuario._id)
      .success(function(data) {
        console.log("Usuario eliminado correctamente.");
      })
      .error(function(data) {
        console.log('Error: ' + data);
      });
  };

}])

.controller('discoverDefaultPageCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {

}])

.controller('friendsDefaultPageCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {

}])

.controller('loginCtrl', ['$scope', '$http', '$ionicPopup', '$stateParams','$state', function ($scope, $http, $ionicPopup, $stateParams, $state) {

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
