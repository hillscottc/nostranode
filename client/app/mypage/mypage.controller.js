'use strict';

(function() {

  class MypageController {

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

  angular.module('testNgApp')
    .controller('MypageController', MypageController);

})();

