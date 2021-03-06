(function() {
    angular
        .module('dashboard')
            .component('dashboard', {
                templateUrl: 'js/components/dashboard/dashboard.template.html',
                controller: DashController,
                controllerAs: 'vm'
            })

        .service('activeList', function() {         //services in seperate file
            var currentList = '';

            return {
                getCurrentListTitle: function() {
                    return currentList;
                },
                setCurrentListTitle: function (value) {
                    currentList = value;
                }
            }
        });


    function DashController(activeList) {
        var vm = this;

        vm.store = JSON.parse(localStorage.store);
        vm.title = '';

        vm.popUpUrl = 'js/components/info/popoverTemplate.html';

        vm.addList = function () {

            vm.title = prompt('Name your New List: ', 'list' + (vm.store.listTitles.length + 1));

            if (vm.title != null) {
                vm.store.listTitles.push(vm.title);
                vm.store.lists.listArr.push({
                    'title': vm.title,
                    'listLength': 0,
                    'itemsInList': []
                });
                vm.store.lists.listCount++;


                localStorage.store = JSON.stringify(vm.store);
            }

        };

        vm.openList = function (listTitle) {
            activeList.setCurrentListTitle(listTitle);

        };
    }

})();