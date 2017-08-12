angular.module('msgBored')
.service('TopicService', ['$http', function($http){

  function getTopicMessages(path){
    return $http.get('/api/topics/' + path)
    .then(function(topicMessages){
      return topicMessages.data;
    });
  }
  function editTopic(path, title){
    return $http.put('/api/topics/' + path, title)
    .then(function(editTopic){
      return editTopic.data;
    });
  }
  return {
    getTopicMessages: getTopicMessages,
    editTopic: editTopic
  };
}]);