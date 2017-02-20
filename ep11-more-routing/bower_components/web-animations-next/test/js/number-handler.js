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

suite('number-handler', function() {
  test('parse numbers', function() {
    var tests = {
      '0': 0,
      '1234': 1234,
      '-40': -40,
      '+40': 40,
      '   -40   ': -40,
      '4.0': 4,
      '0.4': 0.4,
      '.1234': 0.1234,
      '12.34': 12.34,
      '+.1234': 0.1234,
      '+12.34': 12.34,
      '-.1234': -0.1234,
      '-12.34': -12.34,
    };
    for (var string in tests) {
      assert.equal(webAnimationsMinifill.parseNumber(string), tests[string], 'Parsing "' + string + '"');
    }
  });
  test('invalid numbers fail to parse', function() {
    assert.isUndefined(webAnimationsMinifill.parseNumber(''));
    assert.isUndefined(webAnimationsMinifill.parseNumber('nine'));
    assert.isUndefined(webAnimationsMinifill.parseNumber('1 2'));
    assert.isUndefined(webAnimationsMinifill.parseNumber('+-0'));
    assert.isUndefined(webAnimationsMinifill.parseNumber('50px'));
    assert.isUndefined(webAnimationsMinifill.parseNumber('1.2.3'));
  });
  test('opacity clamping', function() {
    var interpolation = webAnimationsMinifill.propertyInterpolation('opacity', '0', '1');
    assert.equal(interpolation(-1), '0');
    assert.equal(interpolation(2), '1');
  });
});
