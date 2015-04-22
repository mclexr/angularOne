app.controller('HomeController', function ($rootScope, $location) {
    $rootScope.activetab = $location.path();
});

app.controller('SobreController', function ($rootScope, $location) {
    $rootScope.activetab = $location.path();
});

app.controller('ContatoController', function ($rootScope, $location) {
    $rootScope.activetab = $location.path();
});

app.controller('ProjetosController', function ($rootScope, $location) {
    $rootScope.activetab = $location.path();
    $rootScope.projeto = {};
    $rootScope.projetos = sessionStorage.getItem('projetos');
    $rootScope.projetos = JSON.parse($rootScope.projetos);

    if ($rootScope.projetos == null) {
        $rootScope.projetos = [];
    }

    $rootScope.adicionaProjeto = function () {
        $rootScope.projetos.push({
            nome: $rootScope.projeto.nome,
            tecnologia: $rootScope.projeto.tecnologia,
            concluido: false
        });

        sessionStorage.setItem('projetos', JSON.stringify($rootScope.projetos));
        $rootScope.projeto.nome = '';
        $rootScope.projeto.tecnologia = '';

    };

    $rootScope.removeProjeto = function (index) {
        $rootScope.projetos.splice(index, 1)
        sessionStorage.setItem('projetos', JSON.stringify($rootScope.projetos));
    }



});