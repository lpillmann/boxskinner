'use strict';

/**
 * @ngdoc function
 * @name boxskinnerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the boxskinnerApp
 */
angular.module('boxskinnerApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
