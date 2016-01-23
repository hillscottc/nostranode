'use strict';

angular.module('nostranodeApp.auth', [
  'nostranodeApp.constants',
  'nostranodeApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
