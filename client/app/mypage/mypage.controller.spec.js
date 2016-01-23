'use strict';

describe('Controller: MypageCtrl', function () {

  // load the controller's module
  beforeEach(module('testNgApp'));

  var MypageCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MypageCtrl = $controller('MypageCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
