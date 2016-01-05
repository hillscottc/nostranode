var request = require('supertest'),
    express = require('express'),
    assert = require('assert'),
    chai = require('chai'),
    expect = chai.expect;

var word_library = require('../word_library');
var nostra = require('../nostra');
var nostraUtils = require('../nostra_utils');


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
        expect(warning).to.have.length.of.at.least(2);
    })
});

describe('nostra utils', function(){

    describe('sentenceCase', function(){

        it('works', function(){
            var results = nostraUtils.sentenceCase("hello world");
            var expected = "Hello world.";
            expect(results).to.equal(expected);
        });

        it('works when already punctuated', function(){
            var results = nostraUtils.sentenceCase("hello world?");
            var expected = "Hello world?";
            expect(results).to.equal(expected);
        });

        it('works excited', function(){
            var results = nostraUtils.sentenceCase("hello world!", true);
            var expected = "Hello world!";
            expect(results).to.equal(expected);
        });
    })
});

