'use strict';

/**
 * @ngdoc function
 * @name boxskinnerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the boxskinnerApp
 */
angular.module('boxskinnerApp')
  .controller('MainCtrl', ['$scope', '$firebaseArray', '$firebaseObject', 'WriteService',
  function($scope, $firebaseArray, $firebaseObject, WriteService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    console.log('iupiiiiii. Firebase working. Services quite messy, but it has the path to do stuff!');
    
    var newEntryObj = {
      'name':     'abc',
      'title':    'abc',
      'location': 'abc',
      'needs': 'aaa',
      'knows': 'bbb',
      'needsAllNames': 'userNeeds',
      'knowsAllNames': 'userKnows',
			'imgURL': '$scope.imgURL' ,
      'project':{  
            'name': '$scope.projectName',
            'url': '$scope.projectUrl',
            'description': '$scope.projectDescription',
            'pics': {},//$scope.projectPics,
            'needs': '$scope.projectNeeds',
            'knows': '$scope.projectKnows' 
            }       
    };

    WriteService.addUserTest(newEntryObj);
    

  }]);
