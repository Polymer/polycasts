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

module("Director.js", {
  setup: function() {
    window.location.hash = "";
    shared = {};
    // Init needed keys earlier because of in HTML5 mode the route handler
    // is executed upon Router.init() and due to that setting shared.fired
    // in the param test of createTest is too late
    if (HTML5TEST) {
      shared.fired       = [];
      shared.fired_count = 0;
    }
  },
  teardown: function() {
    window.location.hash = "";
    shared = {};
  }
});

var shared;

function createTest(name, config, use, test, initialRoute) {
  // We rename to `RouterAlias` for the browserify tests, since we want to be
  // sure that no code is depending on `window.Router` being available.
  var Router = window.Router || window.RouterAlias;

  if (typeof use === 'function') {
    test = use;
    use = undefined;
  }

  if (HTML5TEST) {
    if (use === undefined) {
      use = {};
    }

    if (use.run_handler_in_init === undefined) {
      use.run_handler_in_init = false;
    }
    use.html5history        = true;
  }

  // Because of the use of setTimeout when defining onpopstate
  var innerTimeout = HTML5TEST === true ? 500 : 0;

  asyncTest(name, function() {
    setTimeout(function() {
      var router = new Router(config),
          context;

      if (use !== undefined) {
        router.configure(use);
      }

      router.init(initialRoute);

      setTimeout(function() {
        test.call(context = {
          router: router,
          navigate: function(url, callback) {
            if (HTML5TEST) {
              router.setRoute(url);
            } else {
              window.location.hash = url;
            }
            setTimeout(function() {
              callback.call(context);
            }, 14);
          },
          finish: function() {
            router.destroy();
            start();
          }
        })
      }, innerTimeout);
    }, 14);
  });
};
