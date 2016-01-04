var request = require('supertest'),
    express = require('express'),
    assert = require('assert'),
    chai = require('chai'),
    expect = chai.expect;

var word_library = require('../word_library');
var nostra = require('../nostra');


describe('word_library', function(){

    it('getWords', function(){
        var results = word_library.getWords("planets");
        var expected = ["Mercury", "Venus", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
        expect(JSON.stringify(results)).to.equal(JSON.stringify(expected));
    })
});

describe('nostra sentences', function(){

    it('warning', function(){

        var warning = nostra.sentences.warning();

        console.log(warning);

    })
});


