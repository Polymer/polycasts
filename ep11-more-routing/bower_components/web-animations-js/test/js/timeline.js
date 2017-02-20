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

suite('timeline-tests', function() {
  setup(function() {
    document.timeline._players = [];
    webAnimations1.timeline._players = [];
  });

  test('no current players', function() {
    assert.equal(document.timeline.getAnimationPlayers().length, 0);
  });

  test('getAnimationPlayers', function() {
    tick(90);
    assert.equal(document.timeline.getAnimationPlayers().length, 0);
    var player = document.body.animate([], {duration: 500, iterations: 1});
    tick(300);
    assert.equal(document.timeline.getAnimationPlayers().length, 1);

    var player2 = document.body.animate([], {duration: 1000});
    assert.equal(document.timeline.getAnimationPlayers().length, 2);
    tick(800);
    assert.equal(player.finished, true);
    assert.equal(document.timeline.getAnimationPlayers().length, 1);
    tick(2000);
    assert.equal(document.timeline.getAnimationPlayers().length, 0);
  });

  test('getAnimationPlayers checks cancelled animation', function() {
    tick(90);
    assert.equal(document.timeline.getAnimationPlayers().length, 0);
    var player = document.body.animate([], {duration: 500, iterations: 1});
    tick(300);
    assert.equal(document.timeline.getAnimationPlayers().length, 1);
    player.cancel();
    assert.equal(document.timeline.getAnimationPlayers().length, 0);
  });
});
