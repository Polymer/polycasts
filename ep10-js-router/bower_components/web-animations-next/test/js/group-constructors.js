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

suite('group-constructors', function() {
  setup(function() {
    document.timeline._players = [];
  });

  function simpleAnimationGroup() {
    return new AnimationSequence([
      new Animation(document.body, [], 2000),
      new AnimationGroup([
        new Animation(document.body, [], 2000),
        new Animation(document.body, [], 1000)
      ])
    ]);
  }

  test('player getter for children in groups, and __internalPlayer, work as expected', function() {
    var p = document.timeline.play(simpleAnimationGroup());
    tick(0);
    assert.equal(p.source.player, p);
    assert.equal(p._childPlayers[0].source.player, p);
    assert.equal(p._childPlayers[1].source.player, p);
    tick(2100);
    assert.equal(p._childPlayers[1]._childPlayers[0].source.player, p);
    assert.equal(p._childPlayers[1]._childPlayers[1].source.player, p);
  });
});
