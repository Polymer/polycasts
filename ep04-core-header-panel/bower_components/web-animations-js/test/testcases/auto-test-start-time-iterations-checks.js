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
    assert_styles("#normal_a",{'left':'0px'});
    assert_styles("#normal_b",{'left':'0px'});
    assert_styles("#reverse_a",{'left':'0px'});
    assert_styles("#reverse_b",{'left':'0px'});
    assert_styles("#alternate_a",{'left':'0px'});
    assert_styles("#alternate_b",{'left':'0px'});
    assert_styles("#alternate-reverse_a",{'left':'0px'});
    assert_styles("#alternate-reverse_b",{'left':'0px'});
  });
  at(1 * 1000, function() {
    assert_styles("#normal_a",{'left':'200px'});
    assert_styles("#normal_b",{'left':'500px'});
    assert_styles("#reverse_a",{'left':'400px'});
    assert_styles("#reverse_b",{'left':'500px'});
    assert_styles("#alternate_a",{'left':'200px'});
    assert_styles("#alternate_b",{'left':'500px'});
    assert_styles("#alternate-reverse_a",{'left':'400px'});
    assert_styles("#alternate-reverse_b",{'left':'500px'});
  });
  at(2 * 1000, function() {
    assert_styles("#normal_a",{'left':'200px'});
    assert_styles("#normal_b",{'left':'500px'});
    assert_styles("#reverse_a",{'left':'400px'});
    assert_styles("#reverse_b",{'left':'500px'});
    assert_styles("#alternate_a",{'left':'400px'});
    assert_styles("#alternate_b",{'left':'500px'});
    assert_styles("#alternate-reverse_a",{'left':'200px'});
    assert_styles("#alternate-reverse_b",{'left':'500px'});
  });
  at(3 * 1000, function() {
    assert_styles("#normal_a",{'left':'500px'});
    assert_styles("#normal_b",{'left':'500px'});
    assert_styles("#reverse_a",{'left':'100px'});
    assert_styles("#reverse_b",{'left':'500px'});
    assert_styles("#alternate_a",{'left':'100px'});
    assert_styles("#alternate_b",{'left':'500px'});
    assert_styles("#alternate-reverse_a",{'left':'500px'});
    assert_styles("#alternate-reverse_b",{'left':'500px'});
  });
  at(4 * 1000, function() {
    assert_styles("#normal_a",{'left':'500px'});
    assert_styles("#normal_b",{'left':'100px'});
    assert_styles("#reverse_a",{'left':'100px'});
    assert_styles("#reverse_b",{'left':'500px'});
    assert_styles("#alternate_a",{'left':'100px'});
    assert_styles("#alternate_b",{'left':'500px'});
    assert_styles("#alternate-reverse_a",{'left':'500px'});
    assert_styles("#alternate-reverse_b",{'left':'100px'});
  });
  at(5 * 1000, function() {
    assert_styles("#normal_a",{'left':'500px'});
    assert_styles("#normal_b",{'left':'500px'});
    assert_styles("#reverse_a",{'left':'100px'});
    assert_styles("#reverse_b",{'left':'500px'});
    assert_styles("#alternate_a",{'left':'100px'});
    assert_styles("#alternate_b",{'left':'500px'});
    assert_styles("#alternate-reverse_a",{'left':'500px'});
    assert_styles("#alternate-reverse_b",{'left':'500px'});
  });
  at(6 * 1000, function() {
    assert_styles("#normal_a",{'left':'500px'});
    assert_styles("#normal_b",{'left':'500px'});
    assert_styles("#reverse_a",{'left':'100px'});
    assert_styles("#reverse_b",{'left':'500px'});
    assert_styles("#alternate_a",{'left':'100px'});
    assert_styles("#alternate_b",{'left':'500px'});
    assert_styles("#alternate-reverse_a",{'left':'500px'});
    assert_styles("#alternate-reverse_b",{'left':'500px'});
  });
  at(7 * 1000, function() {
    assert_styles("#normal_a",{'left':'500px'});
    assert_styles("#normal_b",{'left':'500px'});
    assert_styles("#reverse_a",{'left':'100px'});
    assert_styles("#reverse_b",{'left':'500px'});
    assert_styles("#alternate_a",{'left':'100px'});
    assert_styles("#alternate_b",{'left':'500px'});
    assert_styles("#alternate-reverse_a",{'left':'500px'});
    assert_styles("#alternate-reverse_b",{'left':'500px'});
  });
  at(8 * 1000, function() {
    assert_styles("#normal_a",{'left':'500px'});
    assert_styles("#normal_b",{'left':'500px'});
    assert_styles("#reverse_a",{'left':'100px'});
    assert_styles("#reverse_b",{'left':'100px'});
    assert_styles("#alternate_a",{'left':'100px'});
    assert_styles("#alternate_b",{'left':'100px'});
    assert_styles("#alternate-reverse_a",{'left':'500px'});
    assert_styles("#alternate-reverse_b",{'left':'500px'});
  });
}, "Auto generated tests");
