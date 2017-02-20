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
 * on-test.js: Tests for the on/route method.
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
    "the on() method": {
      "['foo', 'bar']": function (router) {
        function noop () { }

        router.on(['foo', 'bar'], noop);
        assert.strictEqual(router.routes.foo.on, noop);
        assert.strictEqual(router.routes.bar.on, noop);
      },
      "'baz'": function (router) {
        function noop () { }

        router.on('baz', noop);
        assert.strictEqual(router.routes.baz.on, noop);
      },
      "'after', 'baz'": function (router) {
        function noop () { }

        router.on('after', 'boo', noop);
        assert.strictEqual(router.routes.boo.after, noop);
      }
    }
  }
}).export(module);
