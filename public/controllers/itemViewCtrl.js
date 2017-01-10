mainApp.controller("itemViewCtrl", function(SERVER_INFO, $scope, $routeParams, $http) {
    var serverAddr = "http://"+SERVER_INFO.IP+":"+SERVER_INFO.PORT;
    $scope.map = {center: {latitude: 45, longitude: -73}, zoom: 8};

    $scope.mapVisible = false;
    $scope.mapButtonLabel = "Show";

    $http.get(serverAddr+"/items/"+$routeParams.id)
        .success(function(data) {
            $scope.item = data;
        })
        .error(function(data) {
            console.log("Error: "+data);
        });

    $http.get(serverAddr+'/items/order').success(function(data) {
            console.log(JSON.stringify(data));
            $scope.items = data;
        })
        .error(function(err) {
            console.log('Error: ' + err);
        });

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

        console.log("Postin comment: "+$scope.newComment.content);
        $scope.newComment = undefined;
    }




});
