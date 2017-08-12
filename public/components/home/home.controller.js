angular.module('msgBored')
.controller('HomeController', ['$scope', 'HomeService', '$location', function($scope, HomeService, $location){
  $scope.search = '';
  var getTopics = function(){
    HomeService.getTopics()
    .then(function(topics){
      $scope.topics = topics;
    });
  };
  getTopics();


  $scope.newTopic = {
    title: ''
  };
  $scope.addTopic = function(){
    HomeService.createNewTopic($scope.newTopic);
    getTopics();
  };
}]);