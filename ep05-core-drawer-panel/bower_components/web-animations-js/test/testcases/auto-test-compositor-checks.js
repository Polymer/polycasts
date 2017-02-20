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
  at(0 * 1000, function() {
    assert_styles(".anim",{'x':'0px'});
    assert_styles(".anim2",{'ctm':'{1, 0, 0, 1, 0, 0}'});
  });
  at(1 * 1000, function() {
    assert_styles(".anim",{'x':'133.3px'});
    assert_styles(".anim2",{'ctm':'{1, 0, 0, 1, 66.67, 66.67}'});
  });
  at(2 * 1000, function() {
    assert_styles(".anim",{'x':'316.7px'});
    assert_styles(".anim2",{'ctm':'{0.9239, 0.3827, -0.3827, 0.9239, 156.4, 142.9}'});
  });
  at(3 * 1000, function() {
    assert_styles(".anim",{'x':'500px'});
    assert_styles(".anim2",{'ctm':'{0.7071, 0.7071, -0.7071, 0.7071, 235.4, 235.4}'});
  });
  at(4 * 1000, function() {
    assert_styles(".anim",{'x':'550px'});
    assert_styles(".anim2",{'ctm':'{0.3827, 0.9239, -0.9239, 0.3827, 228.7, 269.3}'});
  });
  at(5 * 1000, function() {
    assert_styles(".anim",{'x':'600px'});
    assert_styles(".anim2",{'ctm':'{0, 1, -1, 0, 200, 300}'});
  });
}, "Auto generated tests");
