angular.module('msgBored')
.service('UserService', ['$http', function($http){
  function getUser(path){
    return $http.get('/api/users/' + path)
    .then(function(userMessages){
      return userMessages.data;
    });
  }
  function editTopic(path, title){
    return $http.put('/api/topics/' + path)
    .then(function(editTopic){
      return editTopic.data;
    });
  }
  return {
    getUser: getUser,
    editTopic: editTopic
  };
}]);