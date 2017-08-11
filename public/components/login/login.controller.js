angular.module('msgBored')
.controller('LoginController', ['$scope', 'LoginService', function($scope, LoginService){
  $scope.authUser = {
    username: '',
    password: ''
  };
  $scope.loginUser = function(){
    LoginService.authUser($scope.authUser);
  };
}]);