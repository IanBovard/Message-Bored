var msgBored = angular.module('msgBored', ['ngRoute']);

msgBored
.config(['$routeProvider', '$locationProvider', function($routerovider, $locationProvider){
  $routerovider
  .when('/', {
    templateUrl: 'components/home/home.html',
    controller: 'HomeController'
  });
  $locationProvider.html5Mode(true);
}])
.run(function(){
  console.log('running');
});