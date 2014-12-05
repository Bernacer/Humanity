//Define an angular module for our app
var App = angular.module('HumanityApp', []);
 
//Define Routing for app
//Uri /AddNewOrder -> template Maps.html and Controller AddOrderController
//Uri /ShowOrders -> template news.html and Controller AddOrderController
App.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/maps', {
        templateUrl: 'views/Maps.html',
        controller: 'MapsCtrl'
    }).
      when('/news', {
        templateUrl: 'views/news.html',
        controller: 'NewsCtrl'
      }).
       when('/news/:idNews', {
            templateUrl: 'views/newsDetail.html',
            controller: 'NewsCtrl'
        }).
      otherwise({
        redirectTo: '/maps'
      });
}]);
 
