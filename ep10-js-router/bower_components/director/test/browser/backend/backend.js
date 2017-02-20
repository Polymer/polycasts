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

var http     = require('http'),
  fs       = require('fs'),
  path     = require('path'),
  director = require('../../../lib/director'),
  index;

fs.readFile(path.join(__dirname, '..', 'html5-routes-harness.html'), function (err, data) {
  if (err) {
    throw err;
  }

  index = data;
});

var CONTENT_TYPES = {
  '.js'  : 'text/javascript',
  '.css' : 'text/css'
};

var dirname = path.dirname(module.uri);

// Dummy file server
function fileServer(folder, file) {
  var root = path.resolve(__dirname, '..');

  if (folder === 'build' || folder === 'node_modules') {
    root = path.resolve(root, '..', '..');
  }

  if (file === undefined) {
    file = folder;
    folder = '.';
  }

  var filepath = path.resolve(root, folder, file);

  var res = this.res;

  (fs.exists || path.exists)(filepath, function (exists) {
    if (exists) {
      fs.readFile(filepath, function (err, data) {
        if (err) {
          res.writeHead(404);
          res.end();
        }

        res.writeHead(200, {'Content-Type': CONTENT_TYPES[path.extname(filepath)]});
        res.end(data);
      });
    } else {
      res.writeHead(404);
      res.end();
    }
  });
}

var router = new director.http.Router({
  '/files': {
    '/:folder': {
      '/(.+)': {
        get: fileServer
      },

      get: fileServer
    }
  }
});

var server = http.createServer(function (req, res) {
  router.dispatch(req, res, function (err) {
    if (err && req.url !== '/favicon.ico') {
      // By default just reply with the index page
      this.res.writeHead(200, {'Content-Type': 'text/html'});
      this.res.end(index);
    }
  });
});

server.listen(8080);
