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
    assert_styles(".anim",{'transform':'matrix(1, 0, 0, 1, 0, 0)'});
  });
  at(0.4 * 1000, function() {
    assert_styles(".anim", [
      {'transform':'matrix(1, 0, 0, 1, 40, 0)'},
      {'transform':'matrix(0.9511, 0.309, -0.309, 0.9511, 0, 0)'},
      {'transform':'matrix(0.9511, 0.309, -0.309, 0.9511, 40, 0)'},
      {'transform':'matrix(0.9511, 0.309, -0.309, 0.9511, 38.04, 12.36)'},
    ]);
  });
  at(0.8 * 1000, function() {
    assert_styles(".anim", [
      {'transform':'matrix(1, 0, 0, 1, 80, 0)'},
      {'transform':'matrix(0.809, 0.5878, -0.5878, 0.809, 0, 0)'},
      {'transform':'matrix(0.809, 0.5878, -0.5878, 0.809, 80, 0)'},
      {'transform':'matrix(0.809, 0.5878, -0.5878, 0.809, 64.72, 47.02)'},
    ]);
  });
  at(1.2000000000000002 * 1000, function() {
    assert_styles(".anim", [
      {'transform':'matrix(1, 0, 0, 1, 120, 0)'},
      {'transform':'matrix(0.5878, 0.809, -0.809, 0.5878, 0, 0)'},
      {'transform':'matrix(0.5878, 0.809, -0.809, 0.5878, 120, 0)'},
      {'transform':'matrix(0.5878, 0.809, -0.809, 0.5878, 70.53, 97.08)'},
    ]);
  });
  at(1.6 * 1000, function() {
    assert_styles(".anim", [
      {'transform':'matrix(1, 0, 0, 1, 160, 0)'},
      {'transform':'matrix(0.309, 0.9511, -0.9511, 0.309, 0, 0)'},
      {'transform':'matrix(0.309, 0.9511, -0.9511, 0.309, 160, 0)'},
      {'transform':'matrix(0.309, 0.9511, -0.9511, 0.309, 49.44, 152.2)'},
    ]);
  });
  at(2 * 1000, function() {
    assert_styles(".anim", [
      {'transform':'matrix(1, 0, 0, 1, 200, 0)'},
      {'transform':'matrix(0, 1, -1, 0, 0, 0)'},
      {'transform':'matrix(0, 1, -1, 0, 200, 0)'},
      {'transform':'matrix(0, 1, -1, 0, 0, 200)'},
    ]);
  });
}, "Auto generated tests");
