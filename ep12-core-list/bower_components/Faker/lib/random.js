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

var mersenne = require('../vendor/mersenne');
var faker = require('../index');

var random = {
    // returns a single random number based on a max number or range
    number: function (options) {

        if (typeof options === "number") {
          options = {
            max: options
          };
        }

        options = options || {};

        if (typeof options.min === "undefined") {
          options.min = 0;
        }

        if (typeof options.max === "undefined") {
          options.max = 1;
        }
        if (typeof options.precision === "undefined") {
          options.precision = 1;
        }

        // Make the range inclusive of the max value
        var max = options.max;
        if (max > 0) {
          max += options.precision;
        } 
          
        var randomNumber = options.precision * Math.floor(
          mersenne.rand(max / options.precision, options.min / options.precision));

        return randomNumber;

    },

    // takes an array and returns a random element of the array
    array_element: function (array) {
        array = array || ["a", "b", "c"];
        var r = faker.random.number({ max: array.length - 1 });
        return array[r];
    },

    // takes an object and returns the randomly key or value
    object_element: function (object, field) {
        object = object || {};
        var array = Object.keys(object);
        var key = faker.random.array_element(array);

        return field === "key" ? key : object[key];
    },

    uuid : function () {
        var RFC4122_TEMPLATE = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
        var replacePlaceholders = function (placeholder) {
            var random = Math.random()*16|0;
            var value = placeholder == 'x' ? random : (random &0x3 | 0x8);
            return value.toString(16);
        };
        return RFC4122_TEMPLATE.replace(/[xy]/g, replacePlaceholders);
    }
};

module.exports = random;
