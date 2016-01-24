/**
 * Deliver fortunes from the nostra module.
 * GET     /api/fortunes              ->  index
 * POST    /api/fortunes              ->  create
 * GET     /api/fortunes/:id          ->  show
 * PUT     /api/fortunes/:id          ->  update
 * DELETE  /api/fortunes/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import nostra from 'nostra';
var Fortune = require('./fortune.model');

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

function responseWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

//function saveUpdates(updates) {
//  return function(entity) {
//    var updated = _.merge(entity, updates);
//    return updated.saveAsync()
//      .spread(updated => {
//        return updated;
//      });
//  };
//}
//
//function removeEntity(res) {
//  return function(entity) {
//    if (entity) {
//      return entity.removeAsync()
//        .then(() => {
//          res.status(204).end();
//        });
//    }
//  };
//}

// Gets a list of Fortunes
export function index(req, res) {

  res.status(200).json({"fortune":nostra.generate()});


  //Fortune.findAsync()
  //  .then(responseWithResult(res))
  //  .catch(handleError(res));
}

//// Gets a single Fortune from the DB
//export function show(req, res) {
//  Fortune.findByIdAsync(req.params.id)
//    .then(handleEntityNotFound(res))
//    .then(responseWithResult(res))
//    .catch(handleError(res));
//}
//
//// Creates a new Fortune in the DB
//export function create(req, res) {
//  Fortune.createAsync(req.body)
//    .then(responseWithResult(res, 201))
//    .catch(handleError(res));
//}
//
//// Updates an existing Fortune in the DB
//export function update(req, res) {
//  if (req.body._id) {
//    delete req.body._id;
//  }
//  Fortune.findByIdAsync(req.params.id)
//    .then(handleEntityNotFound(res))
//    .then(saveUpdates(req.body))
//    .then(responseWithResult(res))
//    .catch(handleError(res));
//}
//
//// Deletes a Fortune from the DB
//export function destroy(req, res) {
//  Fortune.findByIdAsync(req.params.id)
//    .then(handleEntityNotFound(res))
//    .then(removeEntity(res))
//    .catch(handleError(res));
//}
