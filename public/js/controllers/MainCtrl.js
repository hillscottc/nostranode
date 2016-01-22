

angular.module('MainCtrl', []).controller('MainController', function($scope) {

  var nostra = require('nostra');

  console.log(nostra.generate());
	$scope.tagline = nostra.generate();

});