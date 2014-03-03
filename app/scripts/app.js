angular.module('app', [
  'ngRoute',
  'app.home'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/home.html',
    controller: 'HomeController'
  });
});
