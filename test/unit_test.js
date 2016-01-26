"use strict";
var request = require('supertest'),
    assert = require('assert'),
    chai = require('chai'),
    expect = chai.expect,
    nostra = require('nostra');

var app = require('../app');

describe('routes', function(){
  it('GET /', function(done){
    request(app)
        .get('/')
        .expect(200)
        .end(function(err, res){
          if (err) throw err;
          //console.log(res.text);
          expect(res.text.length).to.be.above(100);
          done();
        });
  });
});



describe('Fortune API:', function() {

  describe('GET /api/fortune', function() {
    var fortune;

    beforeEach(function(done) {
      request(app)
          .get('/api/fortune')
          .expect(200)
          .expect('Content-Type', /json/)
          .end(function(err, res){
            if (err) throw err;
            fortune = res.body.fortune;
            done();
          });
    });

    it('should be longer than 50 chars', function() {
      expect(JSON.stringify(fortune)).to.have.length.above(50);
    });

    it('should contain at least 2 sentences', function() {
      expect(fortune.split('.').length).to.be.above(1);
    });

  });


});

