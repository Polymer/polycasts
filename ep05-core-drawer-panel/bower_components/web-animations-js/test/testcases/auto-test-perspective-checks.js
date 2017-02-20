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
    assert_styles(".test",{'perspective':'500px'});
  });
  at(0.5 * 1000, function() {
    assert_styles(".test", [
      {'perspective':'412.5px'},
      {'perspective':'625px'},
      {'perspective':'500px'},
      {'perspective':'376px'},
    ]);
  });
  at(1 * 1000, function() {
    assert_styles(".test", [
      {'perspective':'325px'},
      {'perspective':'750px'},
      {'perspective':'none'},
      {'perspective':'252px'},
    ]);
  });
  at(1.5 * 1000, function() {
    assert_styles(".test", [
      {'perspective':'237.5px'},
      {'perspective':'875px'},
      {'perspective':'none'},
      {'perspective':'128px'},
    ]);
  });
  at(2 * 1000, function() {
    assert_styles(".test", [
      {'perspective':'150px'},
      {'perspective':'1000px'},
      {'perspective':'none'},
      {'perspective':'4px'},
    ]);
  });
}, "Auto generated tests");
