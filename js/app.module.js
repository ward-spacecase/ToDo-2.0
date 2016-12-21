(function() {

            angular.module('todoApp', [
                'welcome', 'storage'
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