mainApp.controller("userConfCtrl", function(SERVER_INFO, $scope, $http, $routeParams, $rootScope, $uibModal) {
    var serverAddr = "http://"+SERVER_INFO.IP+":"+SERVER_INFO.PORT;

    function makeid()
    {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( var i=0; i < 25; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }

    $scope.changePhoto = function() {
        var data = {
            base64: $scope.image.base64,
            photo_id: makeid()+".jpg"
        }
        $http.put(serverAddr + '/users/'+$rootScope.user.loginid+'/edit/photo', data)
            .success(function(user) {
                console.log("Imagen cambiada");
                $rootScope.user = user;
                $rootScope.user.photo_user = serverAddr+"/asstes/imgs/profiles/"+user.photo_id;
                $rootScope.openSuccessModal();
            })
            .error(function(data) {
                console.log("Error en cambiar imagen");
                $rootScope.openErrorModal();
        });
    }

    $scope.changeDisplayname = function() {
        var user = {
            displayname: $scope.displayname
        };
        $http.put(serverAddr+ '/users/'+ $rootScope.user.loginid + '/edit/displayname', user)
            .success(function(user) {
                $rootScope.user = user;
                $rootScope.openSuccessModal();
            })
            .error(function(data) {
                console.log("Error");
                $rootScope.openErrorModal();
        });
    }

    $scope.changePassword = function() {
        if($scope.password != $scope.confirm_password) {
            console.log("Contraseñas no coinciden");
        }
        var user = {
            password: $scope.password
        };

        $http.put(serverAddr+ '/users/'+ $rootScope.user.loginid + '/edit/password', user)
            .success(function(user) {
                console.log("Contraseña cambiada")
                $rootScope.user = user;
                $rootScope.openSuccessModal();
            })
            .error(function(data) {
                console.log("Error");
                $rootScope.openErrorModal();
        });

    }


});
