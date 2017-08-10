var msgBored = angular.module('msgBored', ['ngRoute']);

msgBored
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'components/home/home.html',
    controller: 'HomeController'
  })
  .when('/users', {
    templateUrl: 'components/users/users.html',
    controller: 'UsersController'
  })
  .when('/users/:id', {
    templateUrl: 'components/user/user.html',
    controller: 'UserController'
  })
  .otherwise( { redirectTo: '/'} );
  $locationProvider.html5Mode(true);
}])
.run(function(){
  console.log('running');
});