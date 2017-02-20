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

var faker = require('../index');

var image = {
  image: function () {
    var categories = ["abstract", "animals", "business", "cats", "city", "food", "nightlife", "fashion", "people", "nature", "sports", "technics", "transport"];
    return image[faker.random.array_element(categories)]();
  },
  avatar: function () {
    return faker.internet.avatar();
  },
  imageUrl: function (width, height, category) {
      var width = width || 640;
      var height = height || 480;

      var url ='http://lorempixel.com/' + width + '/' + height;
      if (typeof category !== 'undefined') {
        url += '/' + category;
      }
      return url;
  },
  abstract: function (width, height) {
    return faker.image.imageUrl(width, height, 'abstract');
  },
  animals: function (width, height) {
    return faker.image.imageUrl(width, height, 'animals');
  },
  business: function (width, height) {
    return faker.image.imageUrl(width, height, 'business');
  },
  cats: function (width, height) {
    return faker.image.imageUrl(width, height, 'cats');
  },
  city: function (width, height) {
    return faker.image.imageUrl(width, height, 'city');
  },
  food: function (width, height) {
    return faker.image.imageUrl(width, height, 'food');
  },
  nightlife: function (width, height) {
    return faker.image.imageUrl(width, height, 'nightlife');
  },
  fashion: function (width, height) {
    return faker.image.imageUrl(width, height, 'fashion');
  },
  people: function (width, height) {
    return faker.image.imageUrl(width, height, 'people');
  },
  nature: function (width, height) {
    return faker.image.imageUrl(width, height, 'nature');
  },
  sports: function (width, height) {
    return faker.image.imageUrl(width, height, 'sports');
  },
  technics: function (width, height) {
    return faker.image.imageUrl(width, height, 'technics');
  },
  transport: function (width, height) {
    return faker.image.imageUrl(width, height, 'transport');
  }
};

module.exports = image;
