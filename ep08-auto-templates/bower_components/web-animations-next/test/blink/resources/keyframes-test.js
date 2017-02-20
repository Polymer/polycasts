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

(function(){
'use strict'

function createElement() {
  var element = document.createElement('div');
  element.style.position = 'absolute';
  document.documentElement.appendChild(element);
  return element;
}

function heldTiming(progress) {
  return {
    duration: 1000,
    fill: 'forwards',
    delay: -progress * 1000,
  };
}

function assertAnimationStyles(keyframes, expectations, description) {
  for (var progress in expectations) {
    var element = createElement();
    element.animate(keyframes, heldTiming(progress));

    var computedStyle = getComputedStyle(element);
    for (var property in expectations[progress]) {
      assert_equals(computedStyle[property], expectations[progress][property],
          property + ' at ' + (progress * 100) + '%' + (description ? ' ' + description : ''));
    }
  }
}

window.assertAnimationStyles = assertAnimationStyles;
})();
