angular.module('msgBored')
.controller('LoginController', ['$scope', 'LoginService','$location', function($scope, LoginService, $location){
  $scope.authUser = {
    username: '',
    password: ''
  };
  $scope.loginUser = function(){
    LoginService.authUser($scope.authUser);
  };
}]);