angular.module('msgBored')
.controller('TopicController', ['$scope', '$routeParams', 'TopicService', function($scope, $routeParams, TopicService){
  $scope.search = '';
  TopicService.getTopicMessages($routeParams.id)
  .then(function(topicMessages){
    $scope.topicMessages = [topicMessages];
  });
}]);