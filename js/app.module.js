
//for closure

(function() {

            angular.module('todoApp', [
                'welcome', 'storage', 'dashboard', 'routerApp', 'list'
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


    angular.module('todoApp')

        .filter('capitalize', function() {
           return function(input) {
              return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
           } ;
        });

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
                })
                .state('list', {
                    url: '/list',
                    templateUrl: 'js/components/lists/list.template.html',
                    controller: 'ListController'
                })
                .state('info', {
                    url: '/info',
                    templateUrl: 'js/components/info/info.template.html'
                });

        });

    //closure end
})();

