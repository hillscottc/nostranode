'use strict';

var app = require('../..');
import request from 'supertest';


describe('Fortune API:', function() {

  describe('GET /api/fortunes', function() {
    var fortunes;

    beforeEach(function(done) {
      request(app)
        .get('/api/fortunes')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          fortunes = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      var fortuneTxt = fortunes.fortune;
      expect(JSON.stringify(fortuneTxt)).to.have.length.above(10);
    });

  });


});
