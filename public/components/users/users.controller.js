angular.module('msgBored')
.controller('UsersController', ['$scope', 'UsersService', function($scope, UserService){
  $scope.search = '';
  UserService.getUsers()
  .then(function(users){
    $scope.users = users;
  });
}]);