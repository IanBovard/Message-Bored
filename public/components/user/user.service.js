angular.module('msgBored')
.service('UserService', ['$http', function($http){
  function getUser(path){
    return $http.get('/api/users/' + path)
    .then(function(userMessages){
      return userMessages.data;
    });
  }
  return {
    getUser: getUser
  };
}]);