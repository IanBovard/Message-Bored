angular.module('msgBored')
.service('RegService', ['$http','$location', function($http, $location){
  function regUser(userData){
    return $http.post('/api/register', userData)
    .then(function(userData){
      if (userData.data.success === true){
        $location.url('/');
        return userData.data;
      }
    }).catch(function(err){
      if (err.status === 401){
        $location.url('/register');
      }
    });
  }
  return {
    regUser: regUser
  };
}]);