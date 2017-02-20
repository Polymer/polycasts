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
var Helpers = require('./helpers');

var lorem = {
    words: function (num) {
        if (typeof num == 'undefined') { num = 3; }
        return Helpers.shuffle(faker.definitions.lorem.words).slice(0, num);
    },

    sentence: function (wordCount, range) {
        if (typeof wordCount == 'undefined') { wordCount = 3; }
        if (typeof range == 'undefined') { range = 7; }

        // strange issue with the node_min_test failing for captialize, please fix and add faker.lorem.back
        //return  faker.lorem.words(wordCount + Helpers.randomNumber(range)).join(' ').capitalize();

        return  faker.lorem.words(wordCount + faker.random.number(range)).join(' ');
    },

    sentences: function (sentenceCount) {
        if (typeof sentenceCount == 'undefined') { sentenceCount = 3; }
        var sentences = [];
        for (sentenceCount; sentenceCount > 0; sentenceCount--) {
            sentences.push(faker.lorem.sentence());
        }
        return sentences.join("\n");
    },

    paragraph: function (sentenceCount) {
        if (typeof sentenceCount == 'undefined') { sentenceCount = 3; }
        return faker.lorem.sentences(sentenceCount + faker.random.number(3));
    },

    paragraphs: function (paragraphCount) {
        if (typeof paragraphCount == 'undefined') { paragraphCount = 3; }
        var paragraphs = [];
        for (paragraphCount; paragraphCount > 0; paragraphCount--) {
            paragraphs.push(faker.lorem.paragraph());
        }
        return paragraphs.join("\n \r\t");
    }
};

module.exports = lorem;
