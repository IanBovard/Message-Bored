angular.module('msgBored')
.service('HomeService', ['$http', function($http){
  function getTopics(){
    return $http.get('/api/topics')
    .then(function(topics){
      return topics.data;
    });
  }
  return {
    getTopics: getTopics
  };
}]);