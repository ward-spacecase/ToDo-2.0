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
                    vm.store.lists.listArr.push({
                        'title': title,
                        'listLength': 0,
                        'itemsInList': []
                    });
                    vm.store.lists.listCount++;
                    console.log(vm.store);


                    localStorage.store = JSON.stringify(vm.store);
                }

            };

            vm.openList = function(listTitle) {


            };


        });

})();