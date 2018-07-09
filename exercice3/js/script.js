var appRoute = angular.module('appRoute', ['ngRoute'])
.run(function ($rootScope) {
  $rootScope.subjects = [];
});
appRoute.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/home', {templateUrl: 'partials/home.html', controller: 'emailCtrl'})
  .when('/viewmail/:Id', {templateUrl: 'partials/view.html', controller: 'viewCtrl'})
  .otherwise({redirectTo: '/home'});
}]);
appRoute.controller('emailCtrl', ['$scope', function ($scope) {
  $scope.name = {
    regex: /^[a-zA-Z -]{1,20}$/
  };
  $scope.email = {
    model: '',
    regex: /^[\w\-\.]+[a-z0-9]@[\w\-\.]+[a-z0-9]\.[a-z]{2,}$/
  };
  $scope.subject = {
    regex: /^[a-zA-Z -]{1,20}$/,
    model: ''
  };
  $scope.superText = {
    regex: /^[a-zA-Z0-9 -]{1,280}$/,
    model: ''
  };
  $scope.buttonClick = function () {
    $scope.subjects.push({
      name: $scope.name.model,
      email: $scope.email.model,
      subject: $scope.subject.model,
      superText: $scope.superText.model
    });
  };
}]);
appRoute.controller('viewCtrl', ['$routeParams', '$scope', function ($routeParams, $scope) {
  $scope.name = function () {
    return $scope.subjects[$routeParams.Id].name;
  };
  $scope.subject = function () {
    return $scope.subjects[$routeParams.Id].subject;
  };
  $scope.superText = function () {
    return $scope.subjects[$routeParams.Id].superText;
  };
  $scope.email = function () {
    return $scope.subjects[$routeParams.Id].email;
  };
}]);
