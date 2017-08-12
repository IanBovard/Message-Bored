angular.module('msgBored')
.service('LoginService', ['$http','$location', function($http, $location){
  function authUser(userData){
    return $http.post('/api/login', userData)
    .then(function(userData){
      var authUsername = userData.data.message.username;
      if ( userData.data.success === true){
        if (localStorage.username && localStorage.username === authUsername){
          $location.url('/');
          return userData.data;
        }
        if (localStorage.username && localStorage.username !== authUsername){
          localStorage.removeItem('username');
          localStorage.setItem("username", authUsername);
          $location.url('/');
          return userData.data;
        }
        if (!localStorage.username){
          localStorage.setItem("username", authUsername);
          $location.url('/');
          return userData.data;
        }
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