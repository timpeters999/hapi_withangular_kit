(function(angular) {
  'use strict';
var myApp = angular.module('ThisApp', []);

myApp.controller('AppController', ['$scope', function($scope) {
  
    $scope.authenticate = function() {
        //do something with $scope.username and $scope.password
  
    };
  
}]);
})(window.angular);