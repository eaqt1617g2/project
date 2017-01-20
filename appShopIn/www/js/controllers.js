var BASE_URL = "http://192.168.1.105:2709";

angular.module('app.controllers', [])
//angular google maps
  .controller('menuCtrl', ['$scope', '$stateParams', function ($scope, $stateParams) {

  }])

  .controller('lastMinuteDefaultPageCtrl', ['$scope','$rootScope', '$http', '$ionicPopup', '$state', function ($scope, $rootScope, $http, $ionicPopup, $state) {

    $scope.usuario = $rootScope.userLogued;
    console.log('logueado', $scope.usuario );
    $http.get(BASE_URL + '/items').success(function (data) {
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

    $scope.verUsuario = function(item) {
      console.log(item)
      $rootScope.usuarioID = {}
      $rootScope.usuarioID = item;
      $state.go('tabsControllerUser.usersDefaultPage', {}, {reload: true});
    };

    $scope.verDetalle = function(item) {
      console.log(item)
      $rootScope.itemID = {}
      $rootScope.itemID = item;
      $state.go('tabsControllerUser.detailDefaultPage', {}, {reload: true});
    };


  }])

  .controller('usersDefaultPageCtrl', ['$scope','$rootScope', '$http', '$ionicPopup', '$state', function ($scope, $rootScope, $http, $ionicPopup, $state) {

    $scope.UserID = $rootScope.usuarioID; //Obtenemos ID de la URI
    console.log("Usuario", $scope.UserID);
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

    $scope.verUsuario = function(item) {
      console.log(item)
      $rootScope.usuarioID = {}
      $rootScope.usuarioID = item;
      $state.go('tabsControllerUser.usersDefaultPage', {}, {reload: true});
    };

    $scope.verDetalle = function(item) {
      console.log(item)
      $rootScope.itemID = {}
      $rootScope.itemID = item;
      $state.go('tabsControllerUser.detailDefaultPage', {}, {reload: true});
    };

    $scope.follow = function(user, usuario) {
      $http.post(BASE_URL + '/users/'+ usuario.loginid+'/follow',{"_id": user._id}).success(function(data) {
        console.log("Usuario", usuario);
        console.log("User", user);
        $scope.usuario = {};
        $scope.users = {};
        $scope.usuario = data;
        $rootScope.following = true;
      })
        .error(function(data) {
          console.log("Follow error");
        });
    };

    $scope.unfollow = function(user, usuario) {
      $http.post(BASE_URL+ '/users/'+usuario.loginid +'/unfollow',{"_id": user._id}).success(function(data) {
        console.log("Usuario", $scope.usuario);
        console.log("User", $scope.user);
        $scope.usuario = data;
        $rootScope.following = false;
      })
        .error(function(data) {
          console.log("Unfollow error");
        });
    };

  }])

  .controller('perfilDefaultPageCtrl', ['$scope','$rootScope', '$http', '$ionicPopup', '$state', function ($scope, $rootScope, $http, $ionicPopup, $state) {

    $scope.users = {};
    $scope.items = {};
    $scope.usuario = $rootScope.userLogued;
    console.log('logueado', $scope.usuario );

    $http.get(BASE_URL + '/users/'+$scope.usuario).success(function(data) {
      $scope.users = {};
      $scope.items = {};
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

    $scope.verUsuario = function(item) {
      console.log(item)
      $rootScope.usuarioID = {}
      $rootScope.usuarioID = item;
      $state.go('tabsControllerUser.usersDefaultPage', {}, {reload: true});
    };

    $scope.verDetalle = function(item) {
      console.log(item)
      $rootScope.itemID = {}
      $rootScope.itemID = item;
      $state.go('tabsControllerUser.detailDefaultPage', {}, {reload: true});
    };

    $scope.getUsers = function(){
      $scope.items = {};
      $scope.users = {};
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
      $scope.items = {};
      $scope.users = {};
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

  .controller('detailDefaultPageCtrl', ['$scope','$rootScope', '$http', '$ionicPopup', '$state', function ($scope, $rootScope, $http, $ionicPopup, $state) {

    $scope.ItemID = $rootScope.itemID; //Obtenemos ID de la URI
    console.log("Usuario", $scope.ItemID);
    $scope.item = {};
    $http.get(BASE_URL + '/items/'+$scope.ItemID).success(function(data) {
      $scope.item = data;
      console.log("Item", $scope.item);
    })
      .error(function (data) {
        console.log('Error: ' + data);
        var alertPopup = $ionicPopup.alert({
          title: 'No accedes al item!',
        });
      });
  }])

  .controller('searchCtrl', ['$scope','$rootScope', '$http', '$ionicPopup', '$state', function ($scope, $rootScope, $http, $ionicPopup, $state) {

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

    $scope.verUsuario = function(item) {
      console.log(item)
      $rootScope.usuarioID = {}
      $rootScope.usuarioID = item;
      $state.go('tabsControllerUser.usersDefaultPage', {}, {reload: true});
    };

  }])

  .controller('herramientasCtrl', ['$scope','$rootScope', '$http', '$ionicPopup', '$state', function ($scope, $rootScope, $http, $ionicPopup, $state) {

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
          $rootScope.usuario = data;
        })
        .error(function(data) {
          console.log($scope.user)
          console.log('Error: ' + data);
        });
    };

    $scope.logout = function () {
      $rootScope.userLogued = {};
      var addPopup = $ionicPopup.confirm({
        title: 'Seguro que quieres salir?',
        template: '',
        scope: $scope,
        buttons: [
          {text: 'No'},
          {
            text: '<b>Si</b>',
            type: 'button-positive',
            onTap: function () {
              console.log("Ha salido correctamente.");
              $state.go('tabsControllerLogin.login', {}, {reload: true});
            }
          }
        ]
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
        $rootScope.userLogued = {};
        $rootScope.userLogued = data;
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

  .controller('discoverDefaultPageCtrl', ['$scope','$rootScope', '$http', '$ionicPopup', '$state', function ($scope, $rootScope, $http, $ionicPopup, $state) {

    $scope.usuario = $rootScope.userLogued;
    console.log('logueado', $scope.usuario );
    $http.get(BASE_URL + '/items').success(function (data) {
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

  }])

  .controller('friendsDefaultPageCtrl', ['$scope','$rootScope', '$http', '$ionicPopup', '$state', function ($scope, $rootScope, $http, $ionicPopup, $state) {

  }])

  .controller('loginCtrl', ['$scope','$rootScope', '$http', '$ionicPopup', '$stateParams','$state', function ($scope, $rootScope, $http, $ionicPopup, $stateParams, $state) {

    $scope.User = {};

    $scope.loginNormal = function(){
      console.log('user', $scope.User );
      var userLogin = {
        email : $scope.User.email,
        password : $scope.User.password
      };
      $http.post(BASE_URL + '/login', userLogin).success(function (data) {
        console.log("User Logged", data);
        $rootScope.userLogued = data;
        $state.go('tabsController.lastMinute', {}, {reload: true});
      })
        .error(function (data) {
          console.log('Error: ' + data);
          var alertPopup = $ionicPopup.alert({
            title: 'No se ha logueado correctamente!',
            template: 'Introduce bien los datos!'
          });
        });
    }
    $scope.loginFacebook = function(){
      $http.post(BASE_URL + '/auth/facebook').success(function (data) {
        console.log("User Logged", data);
        $rootScope.userLogued = data;
        $state.go('tabsController.lastMinuteDefaultPage', {}, {reload: true});
      })
        .error(function (data) {
          console.log('Error: ' + data);
          var alertPopup = $ionicPopup.alert({
            title: 'No se ha logueado correctamente!',
            template: 'Introduce bien los datos!'
          });
        });
    }

    $scope.loginTwitter = function(){
      $http.post(BASE_URL + '/auth/twitter').success(function (data) {
        console.log("User Logged", data);
        $rootScope.userLogued = data;
        $state.go('tabsController.lastMinuteDefaultPage', {}, {reload: true});
      })
        .error(function (data) {
          console.log('Error: ' + data);
          var alertPopup = $ionicPopup.alert({
            title: 'No se ha logueado correctamente!',
            template: 'Introduce bien los datos!'
          });
        });
    }
    $scope.loginGoogle = function(){
      $http.post(BASE_URL + '/auth/google').success(function (data) {
        console.log("User Logged", data);
        $rootScope.userLogued = data;
        $state.go('tabsControllerNormal.lastMinuteDefaultPage', {}, {reload: true});
      })
        .error(function (data) {
          console.log('Error: ' + data);
          var alertPopup = $ionicPopup.alert({
            title: 'No se ha logueado correctamente!',
            template: 'Introduce bien los datos!'
          });
        });
    }
    $scope.loginGoogle2 = function(){
      console.log($scope.User.email)
      $http.get(BASE_URL + '/users/'+ $scope.User.email)
        .success(function(data) {
          $rootScope.userLogued = data;
          console.log($scope.User.email)
          $state.go('tabsController.lastMinuteDefaultPage', {}, {reload: true});
        })
        .error(function(data) {
          console.log($scope.User)
          console.log('Error: ' + data);
        });
    }
  }])

  .controller('registerCtrl', ['$scope','$rootScope', '$http', '$ionicPopup', '$stateParams','$state', function ($scope, $rootScope, $http, $ionicPopup, $stateParams, $state) {

    $scope.newUser = {};

    // Función para registrar estudiante
    $scope.createUser = function(){
      if ($scope.newUser.password == $scope.newUser.confirm_password) {
        console.log('user', $scope.newUser);
        var postUser = {
          loginid: $scope.newUser.loginid,
          name: $scope.newUser.name,
          last_name: $scope.newUser.last_name,
          password: $scope.newUser.password,
          email: $scope.newUser.email
        };
        $http.post(BASE_URL + '/users/android', postUser).success(function (data) {
          console.log('Registrado correctamente');
          var alertPopup = $ionicPopup.alert({
            title: 'Información',
            template: 'Se ha registrado correctamente, le enseñaremos su página de perfil.'
          });
          console.log($scope.newUser.loginid)
          $rootScope.userLogued = $scope.newUser;
          console.log($scope.newUser)
          $state.go('tabsController.lastMinuteDefaultPage', {}, {reload: true});
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
  .controller('crearItemCtrl', ['$scope', '$ionicLoading', '$ionicPlatform', '$http', '$cordovaCamera', '$cordovaFile', '$cordovaImagePicker', '$state', function ($scope, $ionicLoading, $ionicPlatform, $http, $cordovaCamera, $cordovaFile, $cordovaImagePicker, $state) {
    var vm = this;
var base64;
    var position = {
      "latitud": 41.4,
      "longitud": 2.2
    };
    var geocoder = new google.maps.Geocoder();

    var map;
    var marker;
    $http.post("https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDUm1CEWcBg8E3PKVT715J9uLKr9F-wFKY")
      .success(function(data) {
        position.latitud  = data.location.lat;
        position.longitud = data.location.lng;
        var myLatlng = new google.maps.LatLng(position.latitud, position.longitud);
        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("map"), mapOptions);
          marker = new google.maps.Marker({
          draggable:true,
          position: {
            lat: position.latitud,
            lng: position.longitud
          },
          map: map,
          title: 'Hello World!'
        });
        geocoder.geocode({
          latLng: myLatlng
        }, function(responses) {
          if (responses && responses.length > 0) {
            $scope.$apply(function () {
              $scope.address = responses[0].formatted_address;
            });
          } else {
            console.log('Cannot determine address at this location.');
          }
        });
        marker.addListener('dragend', function(e){
          position.longitud = e.latLng.lng();
          position.latitud = e.latLng.lat();
          console.log(position);
          geocoder.geocode({
            latLng: e.latLng
          }, function(responses) {
            if (responses && responses.length > 0) {
              console.log(e.latLng);
              $scope.$apply(function () {
                $scope.address = responses[0].formatted_address;
              });
            } else {
              console.log('Cannot determine address at this location.');
            }
          });
        });
        $scope.map = map;
    })
      .error(function(data) {
        console.log("error: " + data);
        var myLatlng = new google.maps.LatLng(position.latitud, position.longitud);
        var mapOptions = {
          center: myLatlng,
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        map = new google.maps.Map(document.getElementById("map"), mapOptions);
        $scope.map = map;
      });

    $scope.takeImage = function() {
      var options = {
        quality: 80,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 250,
        targetHeight: 250,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false
      };

      $cordovaCamera.getPicture(options).then(function(imageData) {
        base64 = imageData;
        console.log("data:image/jpeg;base64," + imageData );
        var base64Blob = base64toBlob(imageData, 'image/jpeg');
        $cordovaFile.writeFile(cordova.file.externalCacheDirectory, 'new_pic.jpg', base64Blob, true).then(
          function(success){
            console.log('success')
            console.log(JSON.stringify(success))
          },
          function(error){
            console.log(error)
          }
        )
          $scope.srcImage = "data:image/jpeg;base64," + imageData;
        resolveLocalFileSystemURL('cdvfile://localhost/cache-external/new_pic.jpg', function(entry) {
          var nativePath = entry.toURL();
          console.log('Native URI: ' + nativePath);
          //$scope.srcImage = nativePath;

        });

      }, function(err) {
        // erro
        console.log(err);
      });
    }//


    function base64toBlob(base64Data, contentType) {
      contentType = contentType || '';
      var sliceSize = 1024;
      var byteCharacters = atob(base64Data);
      var bytesLength = byteCharacters.length;
      var slicesCount = Math.ceil(bytesLength / sliceSize);
      var byteArrays = new Array(slicesCount);

      for (var sliceIndex = 0; sliceIndex < slicesCount; ++sliceIndex) {
        var begin = sliceIndex * sliceSize;
        var end = Math.min(begin + sliceSize, bytesLength);

        var bytes = new Array(end - begin);
        for (var offset = begin, i = 0 ; offset < end; ++i, ++offset) {
          bytes[i] = byteCharacters[offset].charCodeAt(0);
        }
        byteArrays[sliceIndex] = new Uint8Array(bytes);
      }
      return new Blob(byteArrays, { type: contentType });
    }
    function makeid()
    {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for( var i=0; i < 25; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text;
    }
    $scope.item = {};
    $scope.uploadItem = function(){
      var data = {
        author: "rosa",
        title: $scope.item.title,
        base64: base64,
        pic_id: makeid()+".jpg"
      }
      $http.post(BASE_URL + '/items/additemApp',data).success(function(data) {

        $scope.usuario = {};
        $scope.users = {};
        $scope.usuario = data;
        //$rootScope.following = true;
        $state.go('tabsController.lastMinuteDefaultPage');
      })
        .error(function(data) {
          console.log("Follow error");
        });
    }

    $scope.getImageSaveContact = function() {
      // Image picker will load images according to these settings
      var options = {
        quality: 100,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 100,
        targetHeight: 100,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false,
        correctOrientation:true
      };

      function getFileContentAsBase64(path,callback){
        window.resolveLocalFileSystemURL(path, gotFile, fail);

        function fail(e) {
          alert('Cannot found requested file');
        }

        function gotFile(fileEntry) {
          fileEntry.file(function(file) {
            var reader = new FileReader();
            reader.onloadend = function(e) {
              var content = this.result;
              callback(content);
            };
            // The most important point, use the readAsDatURL Method from the file plugin
            reader.readAsDataURL(file);
          });
        }
      }


      $cordovaImagePicker.getPictures(options).then(function (imageData) {
        console.log(imageData[0]);
        getFileContentAsBase64(imageData[0],function(base64Image){
          //window.open(base64Image);
          console.log("ya");
          $scope.$apply(function () {
            $scope.srcImage = base64Image;
          });
          var res = base64Image.split(",");
          base64 = res[1];
          console.log(base64);
          // Then you'll be able to handle the myimage.png file as base64
        })
      }, function(error) {
        console.log('Error: ' + JSON.stringify(error));    // In case of error
      });
    };
  }])
