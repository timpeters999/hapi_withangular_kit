//this will add AboutController to the ThisApp angular app.
(function () {
    'use strict';
 
    var app= angular.module('ThisApp');
    app.controller('AboutController', ['$scope', function ($scope) {
        
        $scope.doThis = function() {
            $scope.youclickedit = "You clicked it";
        };
        
    }]);
 
}());

