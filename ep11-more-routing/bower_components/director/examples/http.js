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

var http = require('http'),
    director = require('../lib/director');

var router = new director.http.Router();

var server = http.createServer(function (req, res) {
  req.chunks = [];
  req.on('data', function (chunk) {
    req.chunks.push(chunk.toString());
  });

  router.dispatch(req, res, function (err) {
    if (err) {
      res.writeHead(404);
      res.end();
    }

    console.log('Served ' + req.url);
  });
});

router.get(/foo/, function () {
  this.res.writeHead(200, { 'Content-Type': 'text/plain' });
  this.res.end('hello world\n');
});

router.post(/foo/, function () {
  this.res.writeHead(200, { 'Content-Type': 'application/json' });
  this.res.end(JSON.stringify(this.req.body));
});

server.listen(8080);
console.log('vanilla http server with director running on 8080');
