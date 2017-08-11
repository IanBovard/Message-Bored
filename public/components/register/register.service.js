angular.module('msgBored')
.service('RegService', ['$http', function($http){
  function regUser(userData){
    return $http.post('/api/register', userData)
    .then(function(userData){
      return userData.data;
    });
  }
  return {
    regUser: regUser
  };
}]);