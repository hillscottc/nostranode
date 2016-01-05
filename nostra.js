"use strict";
var util = require('util'),
    getWords = require('./word_library').getWords,
    nostraUtil = require('./nostra_utils');



/**
 * Generate a three to four sentence horoscope.
 * @returns {string}
 */
function generate() {
    var rnum = Math.floor(Math.random() * 10);
    var mood;
    if (rnum <= 8) {
        mood = "good";
    } else {
        mood = "bad";
    }

    var sentences = [
        feeling(mood),
        warning(),
        chooseFrom([relationship(mood), encounter(mood)])
    ];

    // randomize (shuffle) the array
    sentences = shuffle(sentences);

    // Select 2 or 3 sentences, to add to the random feel
    var num_s = Math.floor(Math.random() * 2) + 2;
    sentences = sentences.slice(0, num_s);
    return sentences.join(" ");
}


/**
 * A fast means to randomize short arrays.
 * http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 * @param array
 * @returns {*}
 */
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/**
 * Return random item from a list.
 * @param items
 * @returns {*}
 */
function chooseFrom(items) {
    return items[Math.floor(Math.random() * items.length)]
}


/**
 * Convert 'ing' endings to 'ed' endings.
 * @param word
 * @returns {*}
 */
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


/**
 * Generate a few sentences about a meeting with another person.
 * @param mood
 */
function encounter(mood) {

    //Sentence 1: The meeting
    var familiar_people = getWords("familiar_people");
    var strange_people = getWords("strange_people");
    var locations = getWords("locations");

    var person = chooseFrom(familiar_people.concat(strange_people));
    var location = chooseFrom(getWords("locations"));
    var preposition = location[0];
    location = location[1];
    var s1 = util.format("You may meet %s %s %s.", person, preposition, location);

    // Sentence 2: The discussion
    var discussions = getWords("neutral_discussions");
    discussions.concat(getWords(mood + "_discussions"));
    var feeling_nouns = getWords(mood + "_feeling_nouns");
    var emotive_nouns = getWords(mood + "_emotive_nouns");
    var conversation_topics = getWords("conversation_topics");

    var discussion = chooseFrom(discussions);
    var rnum = Math.floor(Math.random() * 10);
    if (rnum <- 5) {
        var feeling = chooseFrom(feeling_nouns);
        feeling = "feelings of " + feeling;
    } else {
        feeling = chooseFrom(emotive_nouns);
    }
    var topic = chooseFrom(conversation_topics);
    var s2 = util.format("%s about %s may lead to %s.", nostraUtil.an(discussion), topic, feeling);
    s2 = nostraUtil.sentenceCase(s2);
    return util.format("%s %s", s1, s2);
}


/**
 * Warns of what to avoid
 * @returns {*}
 */
function warning() {
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
}


/**
 * A mood-based feeling
 * @param mood
 * @returns {*}
 */
function feeling(mood) {
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



module.exports.warning = warning;
module.exports.feeling = feeling;
module.exports.relationship = relationship;
module.exports.encounter = encounter;
module.exports.generate = generate;