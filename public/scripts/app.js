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
.run(function(){
  console.log('running');
});