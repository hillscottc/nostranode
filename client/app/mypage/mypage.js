'use strict';

angular.module('testNgApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('mypage', {
        url: '/mypage',
        templateUrl: 'app/mypage/mypage.html',
        controller: 'MypageController',
        controllerAs: 'mypage'
      });
  });
