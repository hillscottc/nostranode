"use strict";
var util = require('util'),
    getWords = require('./word_library').getWords,
    nostraUtil = require('./nostra_utils');


// Return random item from a list.
function chooseFrom(items) {
    return items[Math.floor(Math.random() * items.length)]
}


// Convert 'ing' endings to 'ed' endings.
function ingToEd(word) {
    if (word.slice(-3) === "ing") {
        return word.slice(0, -3) + "ed"
    } else {
        return word
    }
}


function positiveIntensify() {
    var rnum = Math.floor(Math.random() * 10);

    if (rnum <= 5) {
        var verb = chooseFrom(["say", "do"]);
        return util.format(", and there's nothing anyone can %s to stop you", verb);
    } else if (rnum <= 8) {
        return ", and you don't care who knows it";
    } else {
        return ", and you don't give a damn";
    }
}

function consolation() {
    var rnum = Math.floor(Math.random() * 10);
    if (rnum <= 6) {
        var when = chooseFrom(["shortly", "soon", "in due time"]);
        return util.format(", but don't worry, everything will improve %s", when);
    } else if (rnum <= 8) {
        return ", perhaps you need a change in your life?";
    } else {
        return "...";
    }
}

function relationship(mood) {
    var verb, talk;

    if (mood === "good") {
        verb = "strengthened";
        talk = "discussion";
    } else {
        verb = "strained";
        talk = "argument";
    }

    var familiar_people = getWords("familiar_people");
    var conversation_topics = getWords("conversation_topics");

    var person = chooseFrom(familiar_people);
    var topic = chooseFrom(conversation_topics);
    var sentence = util.format("Your relationship with %s may be %s ", person, verb);
    sentence += util.format("as the result of %s about %s", nostraUtil.an(talk), topic);

    return nostraUtil.sentenceCase(sentence);

}


// Functions to generate sentences of various types.
var sentences = {

    // warns of what to avoid
    warning: function() {
        var sentence = "";

        var avoidList = getWords("avoid_list");
        var avoid = chooseFrom(avoidList);

        var rnum = Math.floor(Math.random() * 10);

        if (rnum <= 3) {
            sentence = util.format("You would be well advised to avoid %s", avoid);
        } else if (rnum <= 6){
            sentence = util.format("Avoid %s at all costs", avoid);
        } else if (rnum <= 8) {
            sentence = util.format("Steer clear of %s for a stress-free week", avoid);
        } else {
            sentence = util.format("For a peaceful week, avoid %s", avoid);
        }
        return nostraUtil.sentenceCase(sentence);
    },

    // a mood-based feeling
    feeling: function(mood) {
        var rnum = Math.floor(Math.random() * 10);
        var adjectives = getWords(mood + "_feeling_adjs");
        //var degrees = getWords("neutral_degrees") + getWords(mood + "_degrees");
        var degrees = getWords("neutral_degrees").concat(getWords(mood + "_degrees"));

        var adj = ingToEd(chooseFrom(adjectives));
        var degree = chooseFrom(degrees);
        var ending;
        if (mood === "good") {
            ending = positiveIntensify();
        } else {
            ending = consolation();
        }
        var exciting = false;
        if (mood === "GOOD" && rnum <= 5) {
            exciting = true;
        }
        var are = chooseFrom([" are", "'re"]);
        var sentence = util.format("You%s feeling %s %s%s", are, degree, adj, ending)
        return nostraUtil.sentenceCase(sentence, exciting);
    }

};

module.exports.sentences = sentences;
module.exports.relationship = relationship;