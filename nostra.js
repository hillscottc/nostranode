var util = require('util'),
    getWords = require('./word_library').getWords,
    nostraUtil = require('./nostra_utils');


var sentences = {
    warning: function() {
        var sentence = "";

        var avoidList = getWords("avoid_list");
        var avoid = avoidList[Math.floor(Math.random() * avoidList.length)];

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
};





module.exports.sentences = sentences;