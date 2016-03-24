import {nostra} from 'nostra';
import {sinon, chai, request, assert, app} from './test_helper'

var expect = chai.expect;


describe('routes', () => {
  it('GET /', (done) => {
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



describe('Fortune API:', () => {

  describe('GET /api/fortune', () => {
    var fortune;

    beforeEach((done) => {
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

    it('should be longer than 50 chars', () => {
      expect(JSON.stringify(fortune)).to.have.length.above(50);
    });

    it('should contain at least 2 sentences', () => {
      expect(fortune.split('.').length).to.be.above(1);
    });

  });


});

