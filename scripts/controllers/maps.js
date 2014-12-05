//Data
var donnees = [
    {
        country : 'Guinée',
        city: 'Guinée',
        desc: 'Epidémie ebola',
        lat: 10.7188,
        long: -10.2716,
        type: 'epidemies'
    },
    {
        country : 'Libérie',
        city: 'Libérie',
        desc: 'Epidémie ebola',
        lat: 6.35,
        long: -9.29,
        type: 'epidemies'
    },
    {
        country : 'Libérie',
        city: 'Monrovia',
        desc: 'Installation humanitaires anti-ebola',
        lat: 6.3706582,
        long: -10.7050870,
        type: 'instaHum'
    },
    {
        country : 'Cameroun',
        city: 'Yaoundé',
        desc: 'Vaccin delivry',
        lat: 3.8666670,
        long: 11.5166670,
        type: 'vaccins'
    },
    {
        country : 'Nigéria',
        city: 'Sokoto',
        desc: 'International Help',
        lat: 13.0666670,
        long: 5.2333330,
        type: 'vaccins'
    },
    {
        country : 'Ouganda',
        city: 'Kampala',
        desc: 'International Help',
        lat: 0.3136110,
        long: 32.5811110,
        type: 'vaccins'
    },
    {
        country : 'Cameroun',
        city: 'Douala',        
        desc: 'ONG Installation',
        lat: 4.0500000,
        long: 9.7000000,
        type: 'instaHum'
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
                    country : info.country,
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
                    infoWindow.setContent('<h3>' + marker.title + '</h3> <i> ' + marker.country + '<i>' + marker.content);
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
