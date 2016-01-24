'use strict';

(function() {

class MainController {

  constructor($http, $scope, socket) {
    this.$http = $http;
    this.fortune = "";
  }

  getFortune() {
    this.$http.get('/api/fortunes').then(response => {
      this.fortune = response.data.fortune;
    });
  }
}

angular.module('nostranodeApp')
  .controller('MainController', MainController);

})();