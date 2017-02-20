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

suite('tick-tests', function() {
  setup(function() { webAnimations1.timeline._players = []; });

  test('players are in effect but ticking stops once forward fill is reached', function() {
    tick(90);
    var player = document.body.animate([], {duration: 1000, fill: 'forwards'});
    tick(100);
    tick(600);
    assert.equal(webAnimations1.timeline._players.length, 1);
    assert.equal(isTicking(), true);
    tick(1100);
    assert.equal(player.finished, true);
    assert.equal(webAnimations1.timeline._players.length, 1);
    assert.equal(isTicking(), false);
  });
});
