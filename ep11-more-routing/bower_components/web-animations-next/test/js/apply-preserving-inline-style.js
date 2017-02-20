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

suite('apply-preserving-inline-style', function() {
  setup(function() {
    this.element = document.createElement('div');
    ensureStyleIsPatched(this.element);
    this.style = this.element.style;
    document.documentElement.appendChild(this.element);
  });
  teardown(function() {
    this.element.remove();
  });

  test('Style is patched', function() {
    assert(this.element._webAnimationsPatchedStyle);
  });
  test('Setting animated style', function() {
    this.style.left = '0px';
    this.element.style._set('left', '100px');
    assert.equal(this.style.left, '0px');
  });
  test('Clearing animated style', function() {
    this.style.left = '0px';
    this.element.style._set('left', '100px');
    this.element.style._clear('left');
    assert.equal(this.style.left, '0px');
  });
  test('Patched length', function() {
    this.element.style._set('left', '100px');
    this.style.cssText = 'left: 0px; background-color: green;';
    assert.equal(this.style.cssText, 'left: 0px; background-color: green;');
    assert.equal(this.style.left, '0px');
    assert.equal(this.style.backgroundColor, 'green');
    assert.equal(this.style.length, 2);
  });
  test('Patched property getters and setters', function() {
    this.style._set('left', '100px');
    this.style.left = '0px';
    this.style.backgroundColor = 'rgb(1, 2, 3)';
    assert.equal(this.style.left, '0px');
    assert.equal(this.style.backgroundColor, 'rgb(1, 2, 3)');
    assert.equal(getComputedStyle(this.element).left, '100px');
    assert.equal(getComputedStyle(this.element).backgroundColor, 'rgb(1, 2, 3)');
  });
  test('Patched setProperty/getPropertyValue', function() {
    this.style._set('left', '100px');
    this.style.setProperty('left', '0px');
    this.style.setProperty('background-color', 'rgb(1, 2, 3)');
    assert.equal(this.style.getPropertyValue('left'), '0px');
    assert.equal(this.style.getPropertyValue('background-color'), 'rgb(1, 2, 3)');
    assert.equal(getComputedStyle(this.element).left, '100px');
    assert.equal(getComputedStyle(this.element).backgroundColor, 'rgb(1, 2, 3)');
  });
  test('Patched item()', function() {
    this.style._set('left', '100px');
    this.style.setProperty('left', '0px');
    this.style.setProperty('background-color', 'rgb(1, 2, 3)');
    assert.equal(this.style.item(0), 'left');
    assert.equal(this.style.item(1), 'background-color');
    assert.equal(this.style.item(2), '');
    this.style.cssText = 'top: 0px';
    assert.equal(this.style.item(0), 'top');
    assert.equal(this.style.item(1), '');
  });
  test('Patched cssText', function() {
    this.style._set('left', '100px');
    assert.equal(this.style.length, 0);
    this.style.setProperty('left', '0px');
    this.style.setProperty('background-color', 'rgb(1, 2, 3)');
    assert.equal(this.style.length, 2);
    this.style.cssText = 'top: 0px';
    assert.equal(this.style.length, 1);
  });
});
