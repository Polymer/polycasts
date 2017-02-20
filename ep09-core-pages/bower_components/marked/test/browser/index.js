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

var fs = require('fs');

var test = require('../')
  , runTests = test.runTests
  , load = test.load;

var express = require('express')
  , app = express();

app.use(function(req, res, next) {
  var setHeader = res.setHeader;
  res.setHeader = function(name) {
    switch (name) {
      case 'Cache-Control':
      case 'Last-Modified':
      case 'ETag':
        return;
    }
    return setHeader.apply(res, arguments);
  };
  next();
});

var dir = __dirname + '/../tests'
  , files = {};

app.get('/test.js', function(req, res, next) {
  var test = fs.readFileSync(__dirname + '/test.js', 'utf8')
    , files = load();

  test = test.replace('__TESTS__', JSON.stringify(files));
  test = test.replace('__MAIN__', runTests + '');

  res.contentType('.js');
  res.send(test);
});

app.use(express.static(__dirname + '/../../lib'));
app.use(express.static(__dirname));

app.listen(8080);
