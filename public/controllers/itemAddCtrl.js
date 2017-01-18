mainApp.controller("itemAddCtrl", function(SERVER_INFO, $scope, $routeParams, $http) {
    var serverAddr = "http://"+SERVER_INFO.IP+":"+SERVER_INFO.PORT;

    $scope.date = new Date();
    $scope.mapVisible = false;
    $scope.mapButtonLabel = "Show";

    $http.get(serverAddr+"/users/"+$routeParams.loginid)
        .success(function(data) {
            $scope.user = data;
        })
        .error(function(data) {
            console.log("Error: "+data);
        });

    $scope.isImage = function(ext) {
        if (ext) {
            return ext == "jpg" || ext == "jpeg" || ext == "gif" || ext == "png"
        }
    }

    $scope.map = {center: {latitude: 41.3850639, longitude: 2.1734034999999494}, zoom: 18};
    var marker1 = {id: 1, latitude: 41.3850639, longitude: 2.1734034999999494};
    $scope.markers = [];
    $scope.markers[0] = marker1;

    /*$scope.map = {
        center: {
            latitude: 41.3850639,
            longitude: 2.1734034999999494
        },
        zoom: 16,
        events: {
            click: function(mapModel, eventName, originalEventArgs,ok) {
                var e = originalEventArgs[0];

                var geocoder = new google.maps.Geocoder();
                var latlng = new google.maps.LatLng(e.latLng.lat(), e.latLng.lng());

                geocoder.geocode({ 'latLng': latlng }, function (results, status) {
                    if (status == google.maps.GeocoderStatus.OK) {
                        if (results[1]) {

                            console.log(results[1].formatted_address); // details address
                        } else {
                            console.log('Location not found');
                        }
                    } else {
                        console.log('Geocoder failed due to: ' + status);
                    }
                });


            }
        }
    };*/

    $scope.processImages = function(images){

        console.log('Processing images..');

        var defer = $q.defer();

        if(!$rootScope.client.media) $rootScope.client.media = [];

        angular.forEach(images, function(flowFile, i){

            var fileReader = new FileReader();

            fileReader.onload = function (event) {

                var uri = event.target.result;

                $scope.image = {
                    filename: uri
                };

                $rootScope.client.media.push($scope.image);

                defer.resolve($scope.image);

                console.log('Load image: #' + i, $scope.image);

            };

            fileReader.readAsDataURL(flowFile.file);

        });

        return defer.promise;

    };

    $scope.loadImages = function(t) {

        console.log('Load Images..');

        $scope.processImages(t)

            .then(function(images) {

                console.log('Save images!');

                $rootScope.client.put({client: $rootScope.client.client})

                    .then(function(res){
                        $rootScope.client = res;
                        toast.msgToast('Update Success.');
                    });
            });

    };

});
