(function() {

    var templateURL = 'js/components/welcome/welcome.template.html';


angular.
module('welcome')

    .component('welcome', {
    templateUrl: templateURL

}).controller('WelcomeController', function(){
    var vm = this;
    vm.userIsNew = true;
    vm.name = 'guest';

    if(localStorage.store != undefined) {

        vm.name = JSON.parse(localStorage.store).name;
        vm.userIsNew = false;
    }
    vm.justDoIt = function () {

        var store = {
            name: vm.name,
            lists: {
                listCount: 0,
                listArr: []
            },
            listTitles: []
        };
        localStorage.store = JSON.stringify(store);


    };



});
})();