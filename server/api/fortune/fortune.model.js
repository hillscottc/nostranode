'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var FortuneSchema = new mongoose.Schema({
  fortune: String
});

export default mongoose.model('Fortune', FortuneSchema);
