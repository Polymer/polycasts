/**
 * Copyright 2017 Google Inc.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

//
// HTTP Error objectst
//
var util = require('util');

exports.NotModified = function () {
  this.status = 304;
  this.options = {
    removeContentHeaders: true
  };
};

util.inherits(exports.NotModified, Error);

exports.BadRequest = function (msg) {
  msg = msg || 'Bad request';

  this.status = 400;
  this.headers = {};
  this.message = msg;
  this.body = { error: msg };
};

util.inherits(exports.BadRequest, Error);

exports.NotAuthorized = function (msg) {
  msg = msg || 'Not Authorized';

  this.status = 401;
  this.headers = {};
  this.message = msg;
  this.body = { error: msg };
};

util.inherits(exports.NotAuthorized, Error);

exports.Forbidden = function (msg) {
  msg = msg || 'Not Authorized';

  this.status = 403;
  this.headers = {};
  this.message = msg;
  this.body = { error: msg };
};

util.inherits(exports.Forbidden, Error);

exports.NotFound = function (msg) {
  msg = msg || 'Not Found';

  this.status = 404;
  this.headers = {};
  this.message = msg;
  this.body = { error: msg };
};

util.inherits(exports.NotFound, Error);

exports.MethodNotAllowed = function (allowed) {
  var msg = 'method not allowed.';

  this.status = 405;
  this.headers = { allow: allowed };
  this.message = msg;
  this.body = { error: msg };
};

util.inherits(exports.MethodNotAllowed, Error);

exports.NotAcceptable = function (accept) {
  var msg = 'cannot generate "' + accept + '" response';

  this.status = 406;
  this.headers = {};
  this.message = msg;
  this.body = {
    error: msg,
    only: 'application/json'
  };
};

util.inherits(exports.NotAcceptable, Error);

exports.NotImplemented = function (msg) {
  msg = msg || 'Not Implemented';

  this.status = 501;
  this.headers = {};
  this.message = msg;
  this.body = { error: msg };
};

util.inherits(exports.NotImplemented, Error);
