(function(){

    angular.module('list')

        .component('list', {
            templateUrl: 'js/components/lists/list.template.html'
        })

        .controller('ListController', function(activeList) {

            var vm = this;

            vm.currentListTitle = activeList.getCurrentListTitle();     //call to service in dashboard.component.js

            vm.list = null;


            vm.store = JSON.parse(localStorage.store);                  //import stored data in local Storage


            vm.addListItem = function() {
                var item = prompt('What do you have to do NOW? ');

                if(item != null) {
                   vm.list.itemsInList.push({
                       'item': item,
                        'completed': false
                   });
                   vm.list.listLength++;
                   vm.store.lists.listArr[vm.searchList()] = vm.list;
                   localStorage.store = JSON.stringify(vm.store);
                }

            };

            vm.searchList = function() {

            for(var i = 0; i < vm.store.lists.listCount; i++) {

                                 //loop through listArr to get current list as JSON object

                if(vm.currentListTitle == vm.store.lists.listArr[i].title) {

                    return i;
                }
            }
            return -1;
            };

            vm.list = vm.store.lists.listArr[vm.searchList()];

            vm.toggleCompleted = function(item) {
               item.completed = !item.completed;
                vm.store.lists.listArr[vm.searchList()] = vm.list;
                localStorage.store = JSON.stringify(vm.store);

            };

            vm.deleteItem = function(item) {
                for(var i = 0; i < vm.list.listLength; i++) {

                    if(item == vm.list.itemsInList[i]) {

                        vm.list.itemsInList.splice(i, 1);
                    }
                }
                vm.store.lists.listArr[vm.searchList()] = vm.list;
                localStorage.store = JSON.stringify(vm.store);
            };

        });

})();