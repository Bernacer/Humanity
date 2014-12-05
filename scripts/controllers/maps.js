//Data
var donnees = [
    {
        city: 'Toronto',
        desc: 'This is the best city in the world!',
        lat: 43.7000,
        long: -79.4000,
        type: 'epidemies'
    },
    {
        city: 'New York',
        desc: 'This city is aiiiiite!',
        lat: 40.6700,
        long: -73.9400,
        type: 'instaHum'
    },
    {
        city: 'Chicago',
        desc: 'This is the second best city in the world!',
        lat: 41.8819,
        long: -87.6278,
        type: 'instaHum'
    },
    {
        city: 'Los Angeles',
        desc: 'This city is live!',
        lat: 34.0500,
        long: -118.2500,
        type: 'vaccins'
    },
    {
        city: 'Las Vegas',
        desc: 'Sin City...\'nuff said!',
        lat: 36.0800,
        long: -115.1522,
        type: 'vaccins'
    }
];

//Angular App Module and Controller
angular.module('HumanityApp')
        .controller('MapsCtrl', function($scope) {

            var mapOptions = {
                zoom: 3,
                minZoom: 3,
                center: new google.maps.LatLng(42.23, 9.19),
                mapTypeControl: true,
                draggable: true,
                zoomControl: true,
                navigationControl: false,
                streetViewControl: true,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            }

            $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

            $scope.markers = [];

            var infoWindow = new google.maps.InfoWindow();

            var createMarker = function(info) {

                urlImage = null;
                var marker = new google.maps.Marker({
                    map: $scope.map,
                    position: new google.maps.LatLng(info.lat, info.long),
                    title: info.city,
                    icon: urlImage,
                });
                if (info.type == "vaccins") {
                    marker.type = "vaccins";
                    marker.icon = "images/vaccins.png";
                } else if (info.type == "epidemies") {
                    marker.type = "epidemies";
                    marker.icon = "images/epidemies.png";
                }
                else {
                    marker.type = "instaHum";
                    marker.icon = "images/instaHum.png";
                    ;
                }
                marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';

                google.maps.event.addListener(marker, 'click', function() {
                    infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                    infoWindow.open($scope.map, marker);
                });

                $scope.markers.push(marker);

            }

            for (i = 0; i < donnees.length; i++) {
                createMarker(donnees[i]);
            }

            $scope.openInfoWindow = function(e, selectedMarker) {
                e.preventDefault();
                google.maps.event.trigger(selectedMarker, 'click');
            }

            $scope.change = function(type) {

                if (type == "vaccins" && $scope.vaccinsCheck == false) {
                    gestionMarqueurs($scope.markers, "vaccins", "suppression");
                }
                if (type == "vaccins" && $scope.vaccinsCheck == true) {
                    gestionMarqueurs($scope.markers, "vaccins", "ajout");
                }

                if (type == "epidemies" && $scope.epidemiesCheck == false) {
                    gestionMarqueurs($scope.markers, "epidemies", "suppression");
                }
                if (type == "epidemies" && $scope.epidemiesCheck == true) {
                    gestionMarqueurs($scope.markers, "epidemies", "ajout");
                }
                if (type == "instaHum" && $scope.instaHumCheck == false) {
                    gestionMarqueurs($scope.markers, "instaHum", "suppression");
                }
                if (type == "instaHum" && $scope.instaHumCheck == true) {
                    gestionMarqueurs($scope.markers, "instaHum", "ajout");
                }
            }

            var gestionMarqueurs = function(marqueurs, marqueur, typeGestion) {
                for (i = 0; i < marqueurs.length; i++) {
                    if (marqueurs[i].type == marqueur) {
                        if (typeGestion == "suppression") {
                            marqueurs[i].setVisible(false);
                        }
                        else {
                            marqueurs[i].setVisible(true);
                        }
                    }
                }
            }

        });
