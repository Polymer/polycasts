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

timing_test(function() {
  at(0, function() {
    assert_styles(".target",{'d':'M10,10v100l100,-50z'});
  });
  at(200, function() {
    assert_styles(".target",{'d':'M48,10L48,94.72L52.72,110L112.2,87.89L148,57.64L125.9,38.94L48,10'});
  });
  at(400, function() {
    assert_styles(".target",{'d':'M86,10L86,98.54L95.44,110L159.2,93.42L186,55.28L169.4,31.71L86,10'});
  });
  at(600, function() {
    assert_styles(".target",{'d':'M124,10L124,102.4L138.2,110L206.1,98.94L224,52.92L212.9,24.47L124,10'});
  });
  at(800, function() {
    assert_styles(".target",{'d':'M162,10L162,106.2L180.9,110L253.1,104.5L262,50.56L256.5,17.24L162,10'});
  });
  at(1000, function() {
    assert_styles(".target",{'d':'M10,10v100l100,-50z'});
  });
}, "Auto generated tests");
