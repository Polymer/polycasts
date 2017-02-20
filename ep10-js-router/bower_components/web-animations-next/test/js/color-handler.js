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

suite('color-handler', function() {
  test('parse colors', function() {
    assert.deepEqual(parseColor(' ReD '), [255, 0, 0, 1]);
    assert.deepEqual(parseColor(' magenta'), [255, 0, 255, 1]);
    assert.deepEqual(parseColor('transparent'), [0, 0, 0, 0]);
    assert.deepEqual(parseColor('#0f0'), [0, 255, 0, 1]);
    assert.deepEqual(parseColor('rgb(0,10,20)'), [0, 10, 20, 1]);
    assert.deepEqual(parseColor('rgba(65,40,20,0.2)'), [13, 8, 4, 0.2]);
    assert.deepEqual(parseColor('hsl(120, 100%, 50%)'), [0, 255, 0, 1]);
  });
  test('invalid colors fail to parse', function() {
    assert.isUndefined(parseColor(''));
    assert.isUndefined(parseColor('bananayellow'));
    assert.isUndefined(parseColor('rgb(10, 20, 30, 40)'));
  });
  test('color interpolation', function() {
    assert.equal(webAnimationsMinifill.propertyInterpolation('color', '#00aa11', '#aa00bb')(0.2), 'rgba(34,136,51,1)');
    assert.equal(webAnimationsMinifill.propertyInterpolation('color', 'transparent', '#004488')(0), 'transparent');
    assert.equal(webAnimationsMinifill.propertyInterpolation('color', 'transparent', '#004488')(0.5), 'rgba(0,68,136,0.500)');
    assert.equal(webAnimationsMinifill.propertyInterpolation('color', 'red', 'green')(2), 'rgba(0,255,0,1)');
    assert.equal(webAnimationsMinifill.propertyInterpolation('color', 'red', 'green')(-1), 'rgba(255,0,0,1)');
  });
});
