"use strict";

/**
 * Capitalise the first letter of the sentence and add a full stop.
 * @param sentence
 * @param exciting
 */
function sentenceCase(sentence, exciting) {

    if (typeof exciting === 'undefined') {
        exciting = false;
    }

    // uppercase the first letter
    sentence = sentence[0].toUpperCase() + sentence.slice(1);

    if (['.', '!', '?'].indexOf(sentence.slice(-1)) > -1) {
        return sentence;
    } else if (exciting) {
        return sentence + "!";
    } else {
        return sentence + ".";
    }
}

// Prefix with 'a' or 'an', as appropriate.
function an(word) {
    if (["a", "e", "i", "o", "u"].indexOf(word[0]) > -1) {
        return "an " + word;
    } else {
        return "a " + word;
    }
}


module.exports.sentenceCase = sentenceCase;
module.exports.an = an;