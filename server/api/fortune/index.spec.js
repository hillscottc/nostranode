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

  describe('GET /api/fortunes/:id', function() {

    it('should route to fortune.controller.show', function() {
      expect(routerStub.get
        .withArgs('/:id', 'fortuneCtrl.show')
        ).to.have.been.calledOnce;
    });

  });

  describe('POST /api/fortunes', function() {

    it('should route to fortune.controller.create', function() {
      expect(routerStub.post
        .withArgs('/', 'fortuneCtrl.create')
        ).to.have.been.calledOnce;
    });

  });

  describe('PUT /api/fortunes/:id', function() {

    it('should route to fortune.controller.update', function() {
      expect(routerStub.put
        .withArgs('/:id', 'fortuneCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('PATCH /api/fortunes/:id', function() {

    it('should route to fortune.controller.update', function() {
      expect(routerStub.patch
        .withArgs('/:id', 'fortuneCtrl.update')
        ).to.have.been.calledOnce;
    });

  });

  describe('DELETE /api/fortunes/:id', function() {

    it('should route to fortune.controller.destroy', function() {
      expect(routerStub.delete
        .withArgs('/:id', 'fortuneCtrl.destroy')
        ).to.have.been.calledOnce;
    });

  });

});
