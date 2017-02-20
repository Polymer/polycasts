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
 * mount-test.js: Tests for the core mount method.
 *
 * (C) 2011, Charlie Robbins, Paolo Fragomeni, & the Contributors.
 * MIT LICENSE
 *
 */

var assert = require('assert'),
    vows = require('vows'),
    director = require('../../../lib/director');

vows.describe('director/cli/path').addBatch({
  "An instance of director.cli.Router with routes": {
    topic: new director.cli.Router({
      'apps': function () {
        console.log('apps');
      },
      ' users': function () {
        console.log('users');
      }
    }),
    "should create the correct nested routing table": function (router) {
      assert.isObject(router.routes.apps);
      assert.isFunction(router.routes.apps.on);
      assert.isObject(router.routes.users);
      assert.isFunction(router.routes.users.on);
    }
  }
}).export(module);
