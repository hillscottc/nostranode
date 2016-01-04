

/**
 * Capitalise the first letter of the sentence and add a full stop.
 * @param sentence
 * @param exciting
 */
function sentenceCase(sentence, exciting) {

    if (typeof exciting === 'undefined') { exciting = false; }


    sentence = sentence[0]

    sentence = sentence[0].toUpperCase() + sentence.slice(1);

    return sentence;

//    if sentence[-1] in {'.', '!', '?'}:
//    return sentence
//    elif exciting:
//        return sentence + "!"
//else:
//    return sentence + "."




}