angular.module('msgBored')
.service('UsersService', ['$http', function($http){
  function getUsers(){
    return $http.get('/api/users')
    .then(function(users){
      return users.data;
    });
  }
  return {
    getUsers: getUsers
  };
}]);