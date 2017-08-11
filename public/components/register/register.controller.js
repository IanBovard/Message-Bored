angular.module('msgBored')
.controller('RegController', ['$scope', 'RegService', function($scope, RegService){
  $scope.newUser = {
    username: '',
    password: ''
  };
  $scope.addUser = function(){
    RegService.regUser($scope.newUser);
  };
}]);