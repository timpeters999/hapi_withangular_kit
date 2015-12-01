// (function() {
//   'use strict';
// var myApp = angular.module('ThisApp', []);

// myApp.controller('IndexController', ['$scope', function($scope) {
  
//     $scope.authenticate = function() {
//         //do something with $scope.username and $scope.password
  
//     };
  
// }]);
// })();
(function () {
    'use strict';
 
    var app= angular.module('ThisApp');
    app.controller('IndexController', ['$scope', function ($scope) {
        
        $scope.authenticate = function() {
            $scope.thisiswhatyoutyped = $scope.username + " + " + $scope.password;
    };
    }]);
 
}());