'use strict';

class NavbarController {
  //start-non-standard
  menu = [
    {'title': 'Home', 'state': 'main'},
    {'title': 'MyPage', 'state': 'mypage'}
  ];

  isCollapsed = true;
  //end-non-standard

  constructor() {
  }
}

angular.module('testNgApp')
  .controller('NavbarController', NavbarController);
