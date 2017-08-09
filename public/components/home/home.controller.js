angular.module('msgBored')
.controller('HomeController', ['$scope', 'HomeService', function($scope, HomeService){
  $scope.search = '';
  HomeController.getTopics()
  .then(topics);
}]);