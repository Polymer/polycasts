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

suite('player-finish-event', function() {
  setup(function() {
    this.element = document.createElement('div');
    document.documentElement.appendChild(this.element);
    this.player = this.element.animate([], 1000);
  });
  teardown(function() {
    if (this.element.parent)
      this.element.removeChild(this.target);
  });

  test('fire when player completes', function(done) {
    var ready = false;
    var fired = false;
    var player = this.player;
    player.onfinish = function(event) {
      assert(ready, 'must not be called synchronously');
      assert.equal(this, player);
      assert.equal(event.target, player);
      assert.equal(event.currentTime, 1000);
      assert.equal(event.timelineTime, 1100);
      if (fired)
        assert(false, 'must not get fired twice');
      fired = true;
      done();
    };
    tick(100);
    tick(1100);
    tick(2100);
    ready = true;
  });

  test('fire when reversed player completes', function(done) {
    this.player.onfinish = function(event) {
      assert.equal(event.currentTime, 0);
      assert.equal(event.timelineTime, 1000);
      done();
    };
    tick(0);
    tick(500);
    this.player.reverse();
    tick(1000);
  });

  test('fire after player is cancelled', function(done) {
    this.player.onfinish = function(event) {
      assert.equal(event.currentTime, 0);
      assert.equal(event.timelineTime, 1, 'event must be fired on next sample');
      done();
    };
    tick(0);
    this.player.cancel();
    tick(1);
  });

  test('multiple event listeners', function(done) {
    var count = 0;
    function createHandler(expectedCount) {
      return function() {
        count++;
        assert.equal(count, expectedCount);
      };
    }
    var toRemove = createHandler(0);
    this.player.addEventListener('finish', createHandler(1));
    this.player.addEventListener('finish', createHandler(2));
    this.player.addEventListener('finish', toRemove);
    this.player.addEventListener('finish', createHandler(3));
    this.player.removeEventListener('finish', toRemove);
    this.player.onfinish = function() {
      assert.equal(count, 3);
      done();
    };
    tick(0);
    this.player.cancel();
    tick(1000);
  });
});
