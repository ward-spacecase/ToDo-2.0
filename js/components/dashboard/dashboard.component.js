(function() {
    angular
        .module('dashboard')
            .component('dashboard', {
                templateUrl: 'js/components/dashboard/dashboard.template.html'
            })
        .controller('DashController', function() {
            var vm = this;

            vm.store = JSON.parse(localStorage.store);




            vm.addList = function() {

               var title = prompt('Name your New List: ', 'list' + (vm.store.listTitles.length + 1));

                if(title != null) {
                    vm.store.listTitles.push(title);

                    localStorage.store = JSON.stringify(vm.store);
                }

            };

            vm.openList = function(listTitle) {


            };


        });

})();