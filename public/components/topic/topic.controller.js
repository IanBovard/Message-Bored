angular.module('msgBored')
.controller('TopicController', ['$scope', '$route', '$routeParams', 'TopicService', function($scope, $route, $routeParams, TopicService){
  $scope.search = '';
  TopicService.getTopicMessages($routeParams.id)
  .then(function(topicMessages){
    $scope.topicMessages = [topicMessages];
  });

  $scope.edit = {
    title: ''
  };
  $scope.editTopic = function(){
    TopicService.editTopic($routeParams.id, $scope.edit)
    .then(function(topic){
      $route.reload();
    });
  };

  $scope.message = {
    body: '',
    author_id: localStorage.username,
    topic_id: $routeParams.id
  };
  $scope.addMessage = function(){
    TopicService.newMessage($routeParams.id, $scope.message)
    .then(function(message){
      $route.reload();
    });
  };

  TopicService.getMessages($routeParams.id)
  .then(function(userMessages){
    $scope.userMessages = [userMessages];
  });
}]);