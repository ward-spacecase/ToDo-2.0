(function() {

            angular.module('todoApp', [
                'welcome', 'storage', 'dashboard'
            ]);



            angular.module('storage', [])
                .controller('MainStorage', function() {
                    var vm = this;
                    vm.clearStorage = function () {
                        localStorage.clear();
                        console.log('clearing storage...');
                    }
                });
})();