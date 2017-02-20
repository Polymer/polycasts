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
 * methods-test.js: Tests for HTTP methods.
 *
 * (C) 2011, Charlie Robbins, Paolo Fragomeni, & the Contributors.
 * MIT LICENSE
 *
 */

var assert = require('assert'),
    vows = require('vows'),
    director = require('../../../lib/director');

vows.describe('director/http/methods').addBatch({
  "When using director": {
    "an instance of director.http.Router should have all relevant RFC methods": function () {
      var router = new director.http.Router();
      director.http.methods.forEach(function (method) {
        assert.isFunction(router[method.toLowerCase()]);
      });
    },
    "the path() method": {
      topic: new director.http.Router(),
      "/resource": {
        "should insert nested routes correct": function (router) {
          function getResource() {}
          function modifyResource() {}

          router.path(/\/resource/, function () {
            this.get(getResource);

            this.put(/\/update/, modifyResource);
            this.post(/create/, modifyResource);
          });

          assert.equal(router.routes.resource.get, getResource);
          assert.equal(router.routes.resource.update.put, modifyResource);
          assert.equal(router.routes.resource.create.post, modifyResource);
        }
      }
    }
  }
}).export(module);
