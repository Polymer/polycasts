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
 * dispatch-test.js: Tests for the core dispatch method.
 *
 * (C) 2011, Charlie Robbins, Paolo Fragomeni, & the Contributors.
 * MIT LICENSE
 *
 */

var assert = require('assert'),
    vows = require('vows'),
    director = require('../../../lib/director');

vows.describe('director/cli/dispatch').addBatch({
  "An instance of director.cli.Router": {
    topic: function () {
      var router = new director.cli.Router(),
          that = this;

      that.matched = {};
      that.matched['users'] = [];
      that.matched['apps'] = []

      router.on('users create', function () {
        that.matched['users'].push('on users create');
      });

      router.on(/apps (\w+\s\w+)/, function () {
        assert.equal(arguments.length, 1);
        that.matched['apps'].push('on apps (\\w+\\s\\w+)');
      });

      return router;
    },
    "should have the correct routing table": function (router) {
      assert.isObject(router.routes.users);
      assert.isObject(router.routes.users.create);
    },
    "the dispatch() method": {
      "users create": function (router) {
        assert.isTrue(router.dispatch('on', 'users create'));
        assert.equal(this.matched.users[0], 'on users create');
      },
      "apps foo bar": function (router) {
        assert.isTrue(router.dispatch('on', 'apps foo bar'));
        assert.equal(this.matched['apps'][0], 'on apps (\\w+\\s\\w+)');
      },
      "not here": function (router) {
        assert.isFalse(router.dispatch('on', 'not here'));
      },
      "still not here": function (router) {
        assert.isFalse(router.dispatch('on', 'still not here'));
      }
    }
  }
}).export(module);
