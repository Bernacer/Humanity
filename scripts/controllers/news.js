/**
 * Created by Nacer on 04/12/14.
 */
angular.module('HumanityApp')
    .controller('NewsCtrl', function($scope,$routeParams) {

    $scope.message = 'This is Show news';
        
        $scope.news=[
            {
                id:1,
                title:"Ebola : le bilan dépasse les 6 000 morts",
                img:"images/5218045.jpg",
                contenu:"L'épidémie d'Ebola a fait au total 6 070 morts et se développe particulièrement en Sierra Leone, indique l'Organisation mondiale de la santé (OMS) dans son dernier bilan publié mercredi 3 décembre. Au total, morts et malade confondus, l'OMS fait état de 17 145 cas répertoriés, selon les chiffres arrêtés au 30 novembre."
            },
            {
                id:2,
                title:"Le bilan d'Ebola revu à la baisse après une erreur de l'OMS",
                img:"images/5204673.jpg",
                contenu:"L'Organisation mondiale de la santé (OMS) a revu à la baisse, lundi 1er décembre, le bilan de l'épidémie de fièvre Ebola, à la suite d'une erreur dans les données rendues publiques ce week-end. Ce bilan est désormais de 5 987 morts, alors que celui avancé samedi faisait état de 6 928 morts. Ce dernier chiffre prenait en compte près d'un millier de décès au Liberia qui en fait n'étaient pas dus à la maladie, a expliqué à Genève le sous-directeur général de l'OMS Bruce Aylward."
            },
            {
                id:3,
                title:"Ebola: les habitants de Sierra Leone prennent un seul repas par jour",
                img:"images/5184535.jpg",
                contenu:"La faim touche les pays frappés par Ebola.  70 % des habitants des zones touchées en Sierra Leone sont réduits à un repas par jour, selon une étude publiée jeudi 27 novembre par l'Organisation des Nations unies pour l'agriculture et l'alimentation (FAO). La réduction du revenu des agriculteurs diminue leur accès à la nourriture, a déclaré Vincent Martin, coordonnateur de la réponse pour Ebola, cité dans un communiqué de la FAO qui a mené avec le Programme alimentaire mondial (PAM) cette enquête dans les trois pays."
            }
        ];
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


        $scope.newsDetail = [

        ]
});