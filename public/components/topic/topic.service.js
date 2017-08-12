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
  function newMessage(path, body){
    return $http.post('/api/messages/', body)
    .then(function(message){
      return message.data;
    });
  }
    function getMessages(path){
    return $http.get('/api/users/' + path)
    .then(function(userMessages){
      return userMessages.data;
    });
  }
  return {
    getTopicMessages: getTopicMessages,
    editTopic: editTopic,
    newMessage: newMessage,
    getMessages: getMessages
  };
}]);