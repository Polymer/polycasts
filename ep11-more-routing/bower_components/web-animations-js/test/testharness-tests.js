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

var testHarnessTests = [
  'blink/2-keyframes-with-offsets.html',
  'blink/3-keyframes-with-offsets.html',
  'blink/add-keyframes.html',
  'blink/insufficient-keyframes.html',
  'blink/simple-keyframes.html',
  'blink/keyframes-with-null-offsets.html',
  'blink/keyframe-properties.html',
  'blink/out-of-order-keyframes.html',
  'blink/same-offset-keyframes.html',
  'blink/eased-keyframes.html',
  'blink/get-animation-players.html',
];

var testHarnessFailures = [
  'blink/get-css-players.html',
];

var interpolationTests = [
  'blink/interpolation/background-color-interpolation.html',
  'blink/interpolation/background-position-interpolation.html',
  'blink/interpolation/background-position-origin-interpolation.html',
  'blink/interpolation/background-size-interpolation.html',
  'blink/interpolation/border-color-interpolation.html',
  'blink/interpolation/border-radius-interpolation.html',
  'blink/interpolation/border-width-interpolation.html',
  'blink/interpolation/bottom-interpolation.html',
  'blink/interpolation/box-shadow-interpolation.html',
  'blink/interpolation/calc-interpolation.html',
  'blink/interpolation/clip-interpolation.html',
  'blink/interpolation/color-interpolation.html',
  'blink/interpolation/flex-interpolation.html',
  'blink/interpolation/font-size-interpolation.html',
  'blink/interpolation/font-weight-interpolation.html',
  'blink/interpolation/height-interpolation.html',
  'blink/interpolation/left-interpolation.html',
  'blink/interpolation/letter-spacing-interpolation.html',
  'blink/interpolation/line-height-interpolation.html',
  'blink/interpolation/margin-interpolation.html',
  'blink/interpolation/max-height-interpolation.html',
  'blink/interpolation/max-width-interpolation.html',
  'blink/interpolation/min-height-interpolation.html',
  'blink/interpolation/min-width-interpolation.html',
  'blink/interpolation/object-position-interpolation.html',
  'blink/interpolation/opacity-interpolation.html',
  'blink/interpolation/orphans-interpolation.html',
  'blink/interpolation/outline-color-interpolation.html',
  'blink/interpolation/outline-offset-interpolation.html',
  'blink/interpolation/outline-width-interpolation.html',
  'blink/interpolation/padding-interpolation.html',
  'blink/interpolation/perspective-interpolation.html',
  'blink/interpolation/perspective-origin-interpolation.html',
  'blink/interpolation/right-interpolation.html',
  'blink/interpolation/shape-image-threshold.html',
  'blink/interpolation/shape-margin.html',
  'blink/interpolation/shape-outside.html',
  'blink/interpolation/text-indent-interpolation.html',
  'blink/interpolation/text-shadow-interpolation.html',
  'blink/interpolation/top-interpolation.html',
  'blink/interpolation/transform-none-interpolation.html',
  'blink/interpolation/transform-origin-interpolation.html',
  'blink/interpolation/transform-perspective-interpolation.html',
  'blink/interpolation/transform-rotate-interpolation.html',
  'blink/interpolation/transform-scale-interpolation.html',
  'blink/interpolation/transform-skew-interpolation.html',
  'blink/interpolation/transform-translate-interpolation.html',
  'blink/interpolation/vertical-align-interpolation.html',
  'blink/interpolation/viewport-unit-interpolation.html',
  'blink/interpolation/visibility-interpolation.html',
  'blink/interpolation/widows-interpolation.html',
  'blink/interpolation/width-interpolation.html',
  'blink/interpolation/word-spacing-interpolation.html',
  'blink/interpolation/z-index-interpolation.html',
  'blink/interpolation/zoom-iterpolation.html',
];

var interpolationFailures = [
  'blink/interpolation/background-image-interpolation.html',
  'blink/interpolation/border-image-outset-interpolation.html',
  'blink/interpolation/border-image-slice-interpolation.html',
  'blink/interpolation/border-image-source-interpolation.html',
  'blink/interpolation/border-image-width-interpolation.html',
  'blink/interpolation/border-spacing-interpolation.html',
  'blink/interpolation/filter-interpolation.html',
  'blink/interpolation/list-style-image-interpolation.html',
  'blink/interpolation/text-decoration-color-interpolation.html',
  'blink/interpolation/transform-matrix-interpolation.html',
];
