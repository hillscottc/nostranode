'use strict';

var app = require('../..');
import request from 'supertest';

var newFortune;

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
      expect(fortunes).to.be.instanceOf(Array);
    });

  });

  describe('POST /api/fortunes', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/fortunes')
        .send({
          name: 'New Fortune',
          info: 'This is the brand new fortune!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newFortune = res.body;
          done();
        });
    });

    it('should respond with the newly created fortune', function() {
      expect(newFortune.name).to.equal('New Fortune');
      expect(newFortune.info).to.equal('This is the brand new fortune!!!');
    });

  });

  describe('GET /api/fortunes/:id', function() {
    var fortune;

    beforeEach(function(done) {
      request(app)
        .get('/api/fortunes/' + newFortune._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          fortune = res.body;
          done();
        });
    });

    afterEach(function() {
      fortune = {};
    });

    it('should respond with the requested fortune', function() {
      expect(fortune.name).to.equal('New Fortune');
      expect(fortune.info).to.equal('This is the brand new fortune!!!');
    });

  });

  describe('PUT /api/fortunes/:id', function() {
    var updatedFortune;

    beforeEach(function(done) {
      request(app)
        .put('/api/fortunes/' + newFortune._id)
        .send({
          name: 'Updated Fortune',
          info: 'This is the updated fortune!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedFortune = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedFortune = {};
    });

    it('should respond with the updated fortune', function() {
      expect(updatedFortune.name).to.equal('Updated Fortune');
      expect(updatedFortune.info).to.equal('This is the updated fortune!!!');
    });

  });

  describe('DELETE /api/fortunes/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/fortunes/' + newFortune._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when fortune does not exist', function(done) {
      request(app)
        .delete('/api/fortunes/' + newFortune._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
