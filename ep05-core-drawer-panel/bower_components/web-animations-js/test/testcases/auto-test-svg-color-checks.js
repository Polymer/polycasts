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
    assert_styles(".anim",{'stroke':'rgba(0, 240, 50, 1)'});
  });
  at(0.2 * 1000, function() {
    assert_styles(".anim",{'stroke':'rgba(30, 200, 90, 1)'});
  });
  at(0.4 * 1000, function() {
    assert_styles(".anim",{'stroke':'rgba(60, 160, 130, 1)'});
  });
  at(0.6000000000000001 * 1000, function() {
    assert_styles(".anim",{'stroke':'rgba(90, 120, 170, 1)'});
  });
  at(0.8 * 1000, function() {
    assert_styles(".anim",{'stroke':'rgba(120, 80, 210, 1)'});
  });
  at(1 * 1000, function() {
    assert_styles(".anim",{'stroke':'rgba(150, 40, 250, 1)'});
  });
}, "Auto generated tests");
