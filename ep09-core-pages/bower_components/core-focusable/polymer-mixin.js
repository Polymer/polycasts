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

Polymer.mixin2 = function(prototype, mixin) {

  // adds a single mixin to prototype

  if (mixin.mixinPublish) {
    prototype.publish = prototype.publish || {};
    Polymer.mixin(prototype.publish, mixin.mixinPublish);
  }

  if (mixin.mixinDelegates) {
    prototype.eventDelegates = prototype.eventDelegates || {};
    for (var e in mixin.mixinDelegates) {
      if (!prototype.eventDelegates[e]) {
        prototype.eventDelegates[e] = mixin.mixinDelegates[e];
      }
    }
  }

  if (mixin.mixinObserve) {
    prototype.observe = prototype.observe || {};
    for (var o in mixin.mixinObserve) {
      if (!prototype.observe[o] && !prototype[o + 'Changed']) {
        prototype.observe[o] = mixin.mixinObserve[o];
      }
    }
  }

  Polymer.mixin(prototype, mixin);

  delete prototype.mixinPublish;
  delete prototype.mixinDelegates;
  delete prototype.mixinObserve;

  return prototype;
};