angular.module('msgBored')
.controller('LoginController', ['$scope', '$rootScope','LoginService','$location', function($scope, $rootScope, LoginService, $location){
  $scope.authUser = {
    username: '',
    password: ''
  };
  $scope.loginUser = function(){
    LoginService.authUser($scope.authUser).then(function(userData){
      if (userData.success === true){
        $rootScope.isLoggedIn = true;
        $rootScope.isNotLoggedIn = false;
      }
    });
  };
}]);