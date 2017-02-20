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
    assert_styles(".anim", [
      {'boxShadow':'rgb(0, 0, 255) -20px -20px 0px 0px'},
      {'boxShadow':'rgb(0, 0, 255) -20px -20px 8px 0px inset'},
      {'boxShadow':'rgb(0, 0, 255) 20px 20px 8px 0px inset'},
      {'boxShadow':'none'},
    ]);
  });
  at(1 * 1000, function() {
    assert_styles(".anim", [
      {'boxShadow':'rgb(0, 32, 191) -10px -10px 3px 2px'},
      {'boxShadow':'rgb(0, 32, 191) -10px -10px 9px 2px inset'},
      {'boxShadow':'rgb(0, 0, 255) 20px 20px 8px 0px inset'},
      {'boxShadow':'none'},
    ]);
  });
  at(2 * 1000, function() {
    assert_styles(".anim", [
      {'boxShadow':'rgb(0, 64, 128) 0px 0px 6px 4px'},
      {'boxShadow':'rgb(0, 64, 128) 0px 0px 10px 4px inset'},
      {'boxShadow':'rgb(0, 128, 0) 20px 20px 12px 8px'},
      {'boxShadow':'rgb(0, 128, 0) 20px 20px 12px 8px'},
    ]);
  });
  at(3 * 1000, function() {
    assert_styles(".anim", [
      {'boxShadow':'rgb(0, 96, 64) 10px 10px 9px 6px'},
      {'boxShadow':'rgb(0, 96, 64) 10px 10px 11px 6px inset'},
      {'boxShadow':'rgb(0, 128, 0) 20px 20px 12px 8px'},
      {'boxShadow':'rgb(0, 128, 0) 20px 20px 12px 8px'},
    ]);
  });
  at(4 * 1000, function() {
    assert_styles(".anim", [
      {'boxShadow':'rgb(0, 128, 0) 20px 20px 12px 8px'},
      {'boxShadow':'rgb(0, 128, 0) 20px 20px 12px 8px inset'},
      {'boxShadow':'rgb(0, 128, 0) 20px 20px 12px 8px'},
      {'boxShadow':'rgb(0, 128, 0) 20px 20px 12px 8px'},
    ]);
  });
}, "Auto generated tests");