angular.module('msgBored')
.service('LoginService', ['$http', function($http){
  function authUser(userData){
    return $http.post('/api/login', userData)
    .then(function(userData){
      return userData.data;
    });
  }
  return {
    authUser: authUser
  };
}]);