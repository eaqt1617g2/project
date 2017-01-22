mainApp.controller("itemAddCtrl", function(SERVER_INFO, $scope, $routeParams, $http, $rootScope) {
    var serverAddr = "http://"+SERVER_INFO.IP+":"+SERVER_INFO.PORT;

    $scope.date = new Date();
    $scope.mapVisible = false;
    $scope.mapButtonLabel = "Show";
    $scope.item = "";


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

    $scope.addItem = function() {
        if($scope.item.longitude == undefined) {
            console.log("No has seleccionado posición");
            return;
        }
        console.log(JSON.stringify($scope.item));
        var data = {
            author: $rootScope.user._id,
            title: $scope.item.title,
            base64: $scope.image.base64,
            pic_id: makeid()+".jpg",
            latitude: $scope.item.latitude,
            longitude: $scope.item.longitude
        }
        $http.post(serverAddr + '/items/additem', data)
            .success(function(data) {
                console.log("Item añadido");
                console.log(JSON.stringify(data));
                $rootScope.openItemSuccessModal();

        })
            .error(function(data) {
                console.log("Additem error");
                $rootScope.openErrorModal();
        });
    }

    function makeid()
    {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for( var i=0; i < 25; i++ )
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;
    }
    $scope.markerList = [];
    $scope.map = {
        center: {
            latitude: 41.3850639,
            longitude: 2.1734034999999494
        },
        zoom: 18,
        showOverlay: true,
        events: {
            "click": function (mapModel, eventName, originalEventArgs) {
                var e = originalEventArgs[0];
                var lat = e.latLng.lat()
                var lon = e.latLng.lng();
                $scope.item.latitude = lat;
                $scope.item.longitude = lon;
                $scope.markerList[0] = {id:1, latitude: lat, longitude: lon};
            }
        },
        options: {
            streetViewControl: false,
            panControl: false,
            maxZoom: 20,
            minZoom: 1,

        }
    }

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