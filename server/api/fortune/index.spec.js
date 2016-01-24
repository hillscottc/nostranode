'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var fortuneCtrlStub = {
  index: 'fortuneCtrl.index',
  show: 'fortuneCtrl.show',
  create: 'fortuneCtrl.create',
  update: 'fortuneCtrl.update',
  destroy: 'fortuneCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var fortuneIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './fortune.controller': fortuneCtrlStub
});

describe('Fortune API Router:', function() {

  it('should return an express router instance', function() {
    expect(fortuneIndex).to.equal(routerStub);
  });

  describe('GET /api/fortunes', function() {

    it('should route to fortune.controller.index', function() {
      expect(routerStub.get
        .withArgs('/', 'fortuneCtrl.index')
        ).to.have.been.calledOnce;
    });

  });


});
