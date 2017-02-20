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

var sys = require('sys')
   , fs = require('fs');

var faker= require('../index');


// generate dataSet as example
fs.writeFile('../examples/dataSet.json',  JSON.stringify(faker.helpers.userCard()), function() {
  sys.puts("dataSet generated successfully!");
});
// generate bigDataSet as example
var bigSet = [];

for(i = 20; i >= 0; i--){
  bigSet.push(faker.helpers.userCard());
};

fs.writeFile('../examples/bigDataSet.json',  JSON.stringify(bigSet), function() {
  sys.puts("bigDataSet generated successfully!");
});
