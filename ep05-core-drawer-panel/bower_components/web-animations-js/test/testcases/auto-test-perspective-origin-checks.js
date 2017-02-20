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
    assert_styles(".test",{'perspectiveOrigin':'50px 50px'});
  });
  at(0.5 * 1000, function() {
    assert_styles(".test", [
      {'perspectiveOrigin':'37.5px 37.5px'},
      {'perspectiveOrigin':'37.5px 50px'},
      {'perspectiveOrigin':'62.5px 50px'},
      {'perspectiveOrigin':'50px 37.5px'},
      {'perspectiveOrigin':'50px 62.5px'},
      {'perspectiveOrigin':'50px 50px'},
      {'perspectiveOrigin':'37.5px 37.5px'},
      {'perspectiveOrigin':'57.5px 57.5px'},
      {'perspectiveOrigin':'42.5px 52.5px'},
      {'perspectiveOrigin':'37.5px 62.5px'},
    ]);
  });
  at(1 * 1000, function() {
    assert_styles(".test", [
      {'perspectiveOrigin':'25px 25px'},
      {'perspectiveOrigin':'25px 50px'},
      {'perspectiveOrigin':'75px 50px'},
      {'perspectiveOrigin':'50px 25px'},
      {'perspectiveOrigin':'50px 75px'},
      {'perspectiveOrigin':'50px 50px'},
      {'perspectiveOrigin':'25px 25px'},
      {'perspectiveOrigin':'65px 65px'},
      {'perspectiveOrigin':'35px 55px'},
      {'perspectiveOrigin':'25px 75px'},
    ]);
  });
  at(1.5 * 1000, function() {
    assert_styles(".test", [
      {'perspectiveOrigin':'12.5px 12.5px'},
      {'perspectiveOrigin':'12.5px 50px'},
      {'perspectiveOrigin':'87.5px 50px'},
      {'perspectiveOrigin':'50px 12.5px'},
      {'perspectiveOrigin':'50px 87.5px'},
      {'perspectiveOrigin':'50px 50px'},
      {'perspectiveOrigin':'12.5px 12.5px'},
      {'perspectiveOrigin':'72.5px 72.5px'},
      {'perspectiveOrigin':'27.5px 57.5px'},
      {'perspectiveOrigin':'12.5px 87.5px'},
    ]);
  });
  at(2 * 1000, function() {
    assert_styles(".test", [
      {'perspectiveOrigin':'0px 0px'},
      {'perspectiveOrigin':'0px 50px'},
      {'perspectiveOrigin':'100px 50px'},
      {'perspectiveOrigin':'50px 0px'},
      {'perspectiveOrigin':'50px 100px'},
      {'perspectiveOrigin':'50px 50px'},
      {'perspectiveOrigin':'0px 0px'},
      {'perspectiveOrigin':'80px 80px'},
      {'perspectiveOrigin':'20px 60px'},
      {'perspectiveOrigin':'0px 100px'},
    ]);
  });
}, "Auto generated tests");
