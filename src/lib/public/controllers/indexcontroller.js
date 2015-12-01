(function () {
    'use strict';
 
    var app= angular.module('ThisApp');
    app.controller('IndexController', ['$scope', function ($scope) {
        
        $scope.authenticate = function() {
            $scope.thisiswhatyoutyped = $scope.username + " + " + $scope.password;
    };
    }]);
 
}());