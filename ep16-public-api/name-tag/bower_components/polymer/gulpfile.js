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

var gulp = require('gulp');
var replace = require('gulp-replace');
var shell = require('gulp-shell');
var del = require('del');
var fs = require('fs');
var path = require('path');

var polyclean = require('polyclean');

function vulcanize(filename, dstdir, excludes) {
  var cmd = path.join('node_modules', '.bin', 'vulcanize');
  if (excludes && excludes.length > 0) {
    excludes.forEach(function(exclude) {
      cmd = cmd + ' --exclude ' + exclude;
    });
    cmd = cmd + ' --implicit-strip';
  }
  cmd = cmd + ' --strip-comments';
  cmd = cmd + ' ' + filename + ' > ' + path.join(dstdir, filename);
  return cmd;
}

var micro = "polymer-micro.html";
var mini = "polymer-mini.html";
var max = "polymer.html";
var workdir = 'dist';

gulp.task('micro', ['mkdir'], shell.task(vulcanize(micro, workdir)));
gulp.task('mini', ['mkdir'], shell.task(vulcanize(mini, workdir, [micro])));
gulp.task('max', ['mkdir'], shell.task(vulcanize(max, workdir, [mini, micro])));

gulp.task('strip', ['micro', 'mini', 'max'], function() {
  return gulp.src(['dist/'+micro, 'dist/' + mini, 'dist/' + max])
    .pipe(polyclean.cleanJsComments())
    // Collapse newlines
    .pipe(replace(/\n\s*\n/g, '\n'))
    // Reduce script tags
    .pipe(replace(/<\/script>\s*<script>/g, '\n\n'))
    .pipe(replace('<html><head><meta charset="UTF-8">', ''))
    .pipe(replace('</head><body>\n</body></html>', ''))
    // Collapse leading spaces+tabs.
    .pipe(replace(/^[ \t]+/gm, ''))
    // Restore important newlines
    .pipe(replace(/(-->|<script>)/g, '$1\n'))
    .pipe(replace(/<\/script>/g, '\n$1'))
    // put the out
    .pipe(gulp.dest('dist'))
    ;
});

gulp.task('clean', function(cb) {
  del([workdir+'/'+micro, workdir+'/'+mini, workdir+'/'+max], cb);
});

gulp.task('mkdir', ['clean'], function(cb) {
  fs.exists(workdir, function(exists) {
    exists ? cb() : fs.mkdir(workdir, null, cb);
  });
});

// Default Task
gulp.task('default', ['strip']);
