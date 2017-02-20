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
    assert_styles(".test",{'webkitTransformOrigin':'50px 50px'});
  });
  at(1 * 1000, function() {
    assert_styles(".test", [
      {'webkitTransformOrigin':'50px 50px'},
      {'webkitTransformOrigin':'25px 50px'},
      {'webkitTransformOrigin':'75px 50px'},
      {'webkitTransformOrigin':'50px 25px'},
      {'webkitTransformOrigin':'50px 75px'},
      {'webkitTransformOrigin':'37.5px 50px'},
      {'webkitTransformOrigin':'25px 25px'},
      {'webkitTransformOrigin':'30px 50px'},
      {'webkitTransformOrigin':'30px 50px 50px'},
      {'webkitTransformOrigin':'75px 75px 50px'},
      {'webkitTransformOrigin':'75px 35px'},
      {'webkitTransformOrigin':'75px 35px -100px'},
    ]);
  });
  at(2 * 1000, function() {
    assert_styles(".test", [
      {'webkitTransformOrigin':'50px 50px'},
      {'webkitTransformOrigin':'0px 50px'},
      {'webkitTransformOrigin':'100px 50px'},
      {'webkitTransformOrigin':'50px 0px'},
      {'webkitTransformOrigin':'50px 100px'},
      {'webkitTransformOrigin':'25px 50px'},
      {'webkitTransformOrigin':'0px 0px'},
      {'webkitTransformOrigin':'10px 50px'},
      {'webkitTransformOrigin':'10px 50px 100px'},
      {'webkitTransformOrigin':'100px 100px 100px'},
      {'webkitTransformOrigin':'100px 20px'},
      {'webkitTransformOrigin':'100px 20px -200px'},
    ]);
  });
}, "Auto generated tests");
