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

var WEB_ANIMATIONS_TESTING = true;
var webAnimationsTesting = window;
var assert = chai.assert;
mocha.setup({ ui: 'tdd' });

function loadWebAnimationsBuildTarget(target) {
  var config = webAnimationsTargetConfig[target];
  config.src.concat(config.test).forEach(function(file) {
    document.write('<script src="../' + file + '"></script>\n');
  });
}

(function() {

  var pageError = null;

  addEventListener('error', function(event) {
    pageError = event.filename + ':' + event.lineno + ' ' + event.message;
  });

  addEventListener('load', function() {

    // Inject test suite for page errors if any encountered.
    if (pageError) {
      suite('page-script-errors', function() {
        test('no script errors on page', function() {
          assert.fail(null, null, pageError);
        });
      });
    }

    mocha.run();
  });

})();
