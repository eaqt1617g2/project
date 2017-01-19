mainApp.controller("itemViewCtrl", function(SERVER_INFO, $scope, $routeParams, $http, $rootScope) {
    var serverAddr = "http://"+SERVER_INFO.IP+":"+SERVER_INFO.PORT;
    $scope.map = {center: {latitude: 41.2833, longitude: 1.9667}, zoom: 8};
    $scope.date = new Date();
    $scope.mapVisible = false;
    $scope.mapButtonLabel = "Show";

    $scope.liked = false;

    $http.get(serverAddr+"/items/"+$routeParams.id)
        .success(function(data) {
            $scope.item = data;
            for(var i = 0; i < $scope.item.likes.length; i++)
            {
                if($scope.item.likes[i] == $rootScope.user._id)
                    $scope.liked = true;
                else
                    $scope.liked = false;
            }
        })
        .error(function(data) {
            console.log("Error: "+data);
        });

    /*
    $http.get(serverAddr+'/items/order').success(function(data) {
            console.log(JSON.stringify(data));
            $scope.items = data;
        })
        .error(function(err) {
            console.log('Error: ' + err);
        });
    */
    $scope.mapButton = function() {
        $scope.mapVisible = !$scope.mapVisible;

        if($scope.mapVisible){
            $scope.mapButtonLabel = "Hide";
        }else{
            $scope.mapButtonLabel = "Show";
        }
    };

    $scope.postComment = function() {
        if($scope.newComment == undefined || $scope.newComment.content == "") {
            console.log("Empty comment");
            return;
        }

        $scope.newComment.author_loginid = $rootScope.user.loginid;
        console.log("Postin comment: "+JSON.stringify($scope.newComment));
        $http.post(serverAddr+ '/items/'+$routeParams.id+'/comments', $scope.newComment)
            .success(function(data) {
                $scope.item = data;
                console.log("Comentario creado correctamente");
            })
            .error(function(data) {
                console.log("Error al añadir comentario");
            });
        $scope.newComment = undefined;
    }

    $scope.like = function() {
        $http.post(serverAddr+ '/items/'+$routeParams.id+'/like',
            {"_id": $rootScope.user._id}
        )
            .success(function(data) {
                $scope.item = data;
                $scope.liked = true;
            })
            .error(function(data) {
                console.log("Like error");
        });
    }
    $scope.dislike = function() {
        $http.post(serverAddr+ '/items/'+$routeParams.id+'/dislike',
            {"_id": $rootScope.user._id}
        )
            .success(function(data) {
                $scope.item = data;
                $scope.liked = false;
            })
            .error(function(data) {
                console.log("Dislike error");
            });
    }




});
