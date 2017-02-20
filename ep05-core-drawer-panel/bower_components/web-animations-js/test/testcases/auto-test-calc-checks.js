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
    assert_styles(".anim",{'width':'50px'});
  });
  at(0.5 * 1000, function() {
    assert_styles(".anim", [
      {'width':'81.25px'},
      {'width':'81.25px'},
      {'width':'137.5px'},
      {'width':'81.25px'},
      {'width':'95.3125px'},
      {'width':'95.3125px'},
      {'width':'95.3125px'},
    ]);
  });
  at(1 * 1000, function() {
    assert_styles(".anim", [
      {'width':'150px'},
      {'width':'150px'},
      {'width':'225px'},
      {'width':'150px'},
      {'width':'168.75px'},
      {'width':'168.75px'},
      {'width':'168.75px'},
    ]);
  });
  at(1.5 * 1000, function() {
    assert_styles(".anim", [
      {'width':'256.25px'},
      {'width':'256.25px'},
      {'width':'312.5px'},
      {'width':'256.25px'},
      {'width':'270.3125px'},
      {'width':'270.3125px'},
      {'width':'270.3125px'},
    ]);
  });
  at(2 * 1000, function() {
    assert_styles(".anim",{'width':'400px'});
  });
}, "Auto generated tests");
