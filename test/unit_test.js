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

