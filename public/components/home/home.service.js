angular.module('msgBored')
.service('HomeService', ['$http', '$location', function($http, $location){
  function getTopics(){
    return $http.get('/api/topics')
    .then(function(topics){
      return topics.data;
    });
  }

  function createNewTopic(newTopic){
    return $http.post('/api/topics', newTopic)
    .then(function(newTopic){
      return newTopic.data;
    });
  }
  return {
    getTopics: getTopics,
    createNewTopic: createNewTopic
  };
}]);