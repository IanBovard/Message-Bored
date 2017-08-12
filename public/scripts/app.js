var msgBored = angular.module('msgBored', ['ngRoute']);

msgBored
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'components/home/home.html',
    controller: 'HomeController'
  })
  .when('/login', {
    templateUrl: 'components/login/login.html',
    controller: 'LoginController'
  })
  .when('/register', {
    templateUrl: 'components/register/register.html',
    controller: 'RegController'
  })
  .when('/users', {
    templateUrl: 'components/users/users.html',
    controller: 'UsersController'
  })
  .when('/users/:id', {
    templateUrl: 'components/user/user.html',
    controller: 'UserController'
  })
  .when('/topics/:id', {
    templateUrl: 'components/topic/topic.html',
    controller: 'TopicController'
  })
  .otherwise( { redirectTo: '/'} );
  $locationProvider.html5Mode(true);
}])
.run(['$rootScope','$http', '$location', function($rootScope, $http, $location){
  function getLocalStorage(){
    if (localStorage.username){
      $rootScope.isLoggedIn = true;
      $rootScope.isNotLoggedIn = false;
    }else{
      $rootScope.isLoggedIn = false;
      $rootScope.isNotLoggedIn = true;
    }
  }
  getLocalStorage();

  $rootScope.logout = function(){
    $http.get('/api/logout')
    .then(function(logoutData){
      if (localStorage.username){
        $location.url('/');
        localStorage.removeItem("username");
        $rootScope.isNotLoggedIn = true;
        $rootScope.isLoggedIn = false;
      }
    });
  };
}]);