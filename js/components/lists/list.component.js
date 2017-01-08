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


            vm.addlistItem = function() {
                vm.title = prompt('What do you have to do NOW? ');

                if(vm.title != null) {
                   
                }

            };

            for(var i = 0; i < vm.store.lists.listLength; i++) {

                                 //loop through listArr to get current list as JSON object

                if(vm.currentListTitle == vm.store.lists.listArr[i].title) {

                    vm.list = vm.store.lists.listArr[i];
                }
            }



    });

})();