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

suite('interpolation', function() {
  test('interpolate numbers', function() {
    assert.equal(interpolate(4, 2, 0.2), 3.6);
  });
  test('interpolate bools', function() {
    assert.equal(interpolate(false, true, 0.4), false);
    assert.equal(interpolate(false, true, 0.5), true);
    assert.equal(interpolate(false, true, 0.5), true);
  });
  test('interpolate lists', function() {
    assert.deepEqual(interpolate([1, 2, 3], [4, 5, 6], 0.5), [2.5, 3.5, 4.5]);
    assert.deepEqual(interpolate([1], [4], 0.6), [2.8]);
    assert.deepEqual(interpolate([false], [true], 0.6), [true]);
    assert.deepEqual(interpolate([1, false, [3, 6]], [4, true, [6, 8]], 0.6), [2.8, true, [4.8, 7.2]]);
  });
});
