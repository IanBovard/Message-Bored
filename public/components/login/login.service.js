angular.module('msgBored')
.service('LoginService', ['$http','$location', function($http, $location){
  function authUser(userData){
    return $http.post('/api/login', userData)
    .then(function(userData){
      if ( userData.data.success === true){
        $location.url('/');
        return userData.data;
      }
    }).catch(function(err){
      if (err.status === 401){
        $location.url('/login');
      }
    });
  }
  return {
    authUser: authUser
  };
}]);