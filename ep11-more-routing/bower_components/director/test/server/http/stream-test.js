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

/*
 * stream-test.js: Tests for streaming HTTP in director.
 *
 * (C) 2011, Charlie Robbins, Paolo Fragomeni, & the Contributors.
 * MIT LICENSE
 *
 */

var assert = require('assert'),
    http = require('http'),
    vows = require('vows'),
    request = require('request'),
    director = require('../../../lib/director'),
    helpers = require('../helpers'),
    macros = helpers.macros,
    handlers = helpers.handlers

vows.describe('director/http/stream').addBatch({
  "An instance of director.http.Router": {
    "with streaming routes": {
      topic: function () {
        var router = new director.http.Router();
        router.post(/foo\/bar/, { stream: true }, handlers.streamBody);
        router.path('/a-path', function () {
          this.post({ stream: true }, handlers.streamBody);
        });

        return router;
      },
      "when passed to an http.Server instance": {
        topic: function (router) {
          helpers.createServer(router)
            .listen(9092, this.callback);
        },
        "a POST request to /foo/bar": macros.assertPost(9092, 'foo/bar', {
          foo: 'foo',
          bar: 'bar'
        }),
        "a POST request to /a-path": macros.assertPost(9092, 'a-path', {
          foo: 'foo',
          bar: 'bar'
        })
      }
    }
  }
}).export(module);
