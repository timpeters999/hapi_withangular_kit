(function () {
    'use strict';
 
    var app= angular.module('ThisApp');
    app.controller('AboutController', ['$scope', function ($scope) {
        
        $scope.doThis = function() {
            $scope.youclickedit = "You clicked it";
        };
        
    }]);
 
}());

