(function() {

            angular.module('todoApp', [
                'welcome', 'storage'
            ]);
            angular.module('storage', [])
                .controller('MainStorage', function($scope, localStorageService) {

                    function submit(key, val) {
                        localStorage.setItem(key, val);
                        return localStorage[key];
                    }
                });
})();