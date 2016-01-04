var request = require('supertest'),
    express = require('express'),
    assert = require('assert'),
    chai = require('chai'),
    expect = chai.expect;

var word_library = require('../word_library');


describe('word_library', function(){

    it('getWords', function(){

        var words = word_library.getWords("planets");

        console.log(words);

    })
});


