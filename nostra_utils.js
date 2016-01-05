

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

module.exports.sentenceCase = sentenceCase;