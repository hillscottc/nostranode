var assert = require('assert'),
    chai = require('chai'),
    expect = chai.expect;

var nostra = require('nostra');

// This test is not necessary any more. The module has its own tests.
describe('nostra', function(){

    it('generate', function(){
        var results = nostra.generate();
        console.log(results);
        expect(results).to.have.length.of.at.least(2);
    });



});


