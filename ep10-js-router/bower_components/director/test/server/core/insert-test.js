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
 * insert-test.js: Tests for inserting routes into a normalized routing table.
 *
 * (C) 2011, Charlie Robbins, Paolo Fragomeni, & the Contributors.
 * MIT LICENSE
 *
 */

var assert = require('assert'),
    vows = require('vows'),
    director = require('../../../lib/director');

vows.describe('director/core/insert').addBatch({
  "An instance of director.Router": {
    topic: new director.Router(),
    "the insert() method": {
      "'on', ['foo', 'bar']": function (router) {
        function route () { }

        router.insert('on', ['foo', 'bar'], route);
        assert.strictEqual(router.routes.foo.bar.on, route);
      },
      "'on', ['foo', 'bar'] again": function (router) {
        function route () { }

        router.insert('on', ['foo', 'bar'], route);
        assert.isArray(router.routes.foo.bar.on);
        assert.strictEqual(router.routes.foo.bar.on.length, 2);
      },
      "'on', ['foo', 'bar'] a third time": function (router) {
        function route () { }

        router.insert('on', ['foo', 'bar'], route);
        assert.isArray(router.routes.foo.bar.on);
        assert.strictEqual(router.routes.foo.bar.on.length, 3);
      },
      "'get', ['fizz', 'buzz']": function (router) {
        function route () { }

        router.insert('get', ['fizz', 'buzz'], route);
        assert.strictEqual(router.routes.fizz.buzz.get, route);
      }
    }
  }
}).export(module);
