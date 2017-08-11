angular.module('msgBored')
.controller('RegController', ['$scope', 'RegService', '$window', function($scope, RegService, $window){
  $scope.newUser = {
    username: '',
    password: ''
  };

  $scope.addUser = function(){
    RegService.regUser($scope.newUser)
    .then(function(userData){
      console.log(userData.success);
      if (userData.success === true){ $window.location.href = '/home.html';}
    }).catch(function(err){
      alert(err.message);
    });
  };
}]);