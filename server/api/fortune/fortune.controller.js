'use strict';

/**
 * Deliver fortunes from the nostra module.
 * GET  /api/fortunes -> index
 */


import _ from 'lodash';
import nostra from 'nostra';


// Get a fortune from the nostra module.
export function index(req, res) {
  var fortune = nostra.generate();
  if (fortune) {
    res.status(200).json({"fortune": fortune});
  } else {
    res.status(500).json({"err" : "Problem with fortune."});
  }
}

