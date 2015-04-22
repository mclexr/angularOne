var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
    // remove o # da url
    $locationProvider.html5Mode(true);

    $routeProvider
        .when('/', {
            templateUrl: 'app/views/home.html',
            controller: 'HomeController',
        })
        .when('/sobre', {
            templateUrl: 'app/views/sobre.html',
            controller: 'SobreController',
        })

    .when('/contato', {
        templateUrl: 'app/views/contato.html',
        controller: 'ContatoController',
    })

    .when('/projetos', {
            templateUrl: 'app/views/projetos.html',
            controller: 'ProjetosController',
        })
        // caso não seja nenhum desses, redirecione para a rota '/'
        .otherwise({
            redirectTo: '/'
        });
});