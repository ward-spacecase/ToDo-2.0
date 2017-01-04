(function() {

            angular.module('todoApp', [
                'welcome', 'storage', 'dashboard', 'routerApp'
            ]);

            //storage module

            angular.module('storage', [])
                .controller('MainStorage', function() {
                    var vm = this;
                    vm.clearStorage = function () {
                        localStorage.clear();
                        console.log('clearing storage...');
                    }
                });
})();

        //ui-router module

angular.module('routerApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider


        .state('home', {
            url: '/home',
            templateUrl: 'js/components/welcome/welcome.template.html'
        })

        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'js/components/dashboard/dashboard.template.html',
            controller: 'DashController'
        });

});