angular.module('msgBored')
.service('TopicService', ['$http', function($http){
  function getTopicMessages(path){
    return $http.get('/api/topics/' + path)
    .then(function(topicMessages){
      return topicMessages.data;
    });
  }
  return {
    getTopicMessages: getTopicMessages
  };
}]);