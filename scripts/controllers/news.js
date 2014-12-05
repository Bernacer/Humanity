/**
 * Created by Nacer on 04/12/14.
 */
angular.module('HumanityApp')
    .controller('NewsCtrl', function($scope,$routeParams,$http) {

        $http.get('http://localhost/wshumanity/webresources/users.users/allUser').
            success(function(data, status, headers, config) {
                $scope.news = data;
            }).
            error(function(data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
            });
        
    $scope.message = 'This is Show news';

        $(function() {
            $('a.page-scroll').bind('click', function(event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
        });

// Highlight the top nav as scrolling occurs
        $('body').scrollspy({
            target: '.navbar-fixed-top'
        })

// Closes the Responsive Menu on Menu Item Click
        $('.navbar-collapse ul li a').click(function() {
            $('.navbar-toggle:visible').click();
        });


});