angular.module('msgBored')
.controller('RegController', ['$scope', 'RegService', '$window', function($scope, RegService, $location){
  $scope.newUser = {
    username: '',
    password: ''
  };
  $scope.addUser = function(){
    RegService.regUser($scope.newUser);
  };
}]);