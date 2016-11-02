'use strict'

var myApp = angular.module('webPortfolio', ['ui.router', 'ui.bootstrap'])

.constant("baseURL","/")

.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
                    // route for the home page
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        templateUrl : 'views/header.html',
                        controller  : 'headerController'
                    },
                    'content': {
                        templateUrl : 'views/main_page_content.html',
                        controller  : 'IndexController'
                    },
                    'footer': {
                        templateUrl : 'views/footer.html'
                    }
                }
            })

            .state('app.education', {
                url:'education',
                views: {
                   
                    'content@': {
                        templateUrl : 'views/education.html',
                        controller  : 'educationController'
                    }
                   
                }
            })

               .state('app.examples', {
                url:'examples',
                views: {
                   
                    'content@': {
                        templateUrl : 'views/examples.html',
                        controller  : 'examplesController'
                    }
                   
                }
            })

                .state('app.courses', {
                url:'courses',
                views: {
                   
                    'content@': {
                        templateUrl : 'views/courses.html',
                        controller  : 'coursesController'
                    }
                   
                }
            });


                    
                    
          

            //   .state('app.articles_search_pages', {
            //   url:'articles/search/:pageNum',
            //     views: {
            //         'content@': {
            //             templateUrl : 'views/articles/article_pagination.html',
            //             controller  : 'articleSearchController'
            //          }
            //     }
            // });
        
            $urlRouterProvider.otherwise('/');
    });

 