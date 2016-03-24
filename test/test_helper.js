import chai from 'chai';
import sinon from 'sinon';
import chaiImmutable from 'chai-immutable';

import assert from 'assert';

var app = require('../app');
var request = require('supertest');


chai.use(chaiImmutable);

module.exports = {
  sinon: sinon,
  chai: chai,
  assert: assert,
  chaiImmutable: chaiImmutable,
  request: request,
  app: app
};
