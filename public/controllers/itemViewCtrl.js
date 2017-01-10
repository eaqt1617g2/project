mainApp.controller("itemViewCtrl", function(SERVER_INFO, $scope, $routeParams, $http) {
    var serverAddr = "http://"+SERVER_INFO.IP+":"+SERVER_INFO.PORT;
    $scope.map = {center: {latitude: 41.2833, longitude: 1.9667}, zoom: 8};
    $scope.date = new Date();
    $scope.mapVisible = false;
    $scope.mapButtonLabel = "Show";

    $http.get(serverAddr+"/items/"+$routeParams.id)
        .success(function(data) {
            $scope.item = data;
        })
        .error(function(data) {
            console.log("Error: "+data);
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
