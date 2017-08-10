angular.module('msgBored')
.controller('HomeController', ['$scope', 'HomeService', function($scope, HomeService){
  $scope.search = '';
  HomeService.getTopics()
  .then(function(topics){
    $scope.topics = topics;
  });
}]);