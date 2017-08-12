angular.module('msgBored')
.controller('UserController', ['$scope', '$routeParams', 'UserService', function($scope, $routeParams, UserService){
  $scope.search = '';

  UserService.getUser($routeParams.id)
  .then(function(userMessages){
    $scope.userMessages = [userMessages];
  });

}]);