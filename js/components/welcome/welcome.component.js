(function() {

    var templateURL = 'js/components/welcome/welcome.template.html';

    if(localStorage.name != undefined) {
        templateURL = 'js/components/welcome/welcome-existing-user.template.html';
    }

angular.
module('welcome')
    .component('welcome', {
    templateUrl: templateURL,
}).controller('WelcomeController', function(){
    var vm = this;

    vm.name = 'guest';

    if(localStorage.name != undefined) {
        vm.name = localStorage.name;
    }
    vm.justDoIt = function () {

        localStorage.name = vm.name;

    };


});
})();