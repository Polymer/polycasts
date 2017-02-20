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

var company = {

    suffixes: function () {
        return ["Inc", "and Sons", "LLC", "Group", "and Daughters"];
    },

    companyName: function (format) {
        switch ((format ? format : faker.random.number(2))) {
        case 0:
            return faker.name.lastName() + " " + faker.company.companySuffix();
        case 1:
            return faker.name.lastName() + "-" + faker.name.lastName();
        case 2:
            return faker.name.lastName() + ", " + faker.name.lastName() + " and " + faker.name.lastName();
        }
    },

    companySuffix: function () {
        return faker.random.array_element(faker.company.suffixes());
    },

    catchPhrase: function () {
        return faker.company.catchPhraseAdjective() + " " +
            faker.company.catchPhraseDescriptor() + " " +
            faker.company.catchPhraseNoun();
    },

    bs: function () {
        return faker.company.bsAdjective() + " " +
            faker.company.bsBuzz() + " " +
            faker.company.bsNoun();
    },

    catchPhraseAdjective: function () {
        return faker.random.array_element(faker.definitions.company.adjective);
    },

    catchPhraseDescriptor: function () {
        return faker.random.array_element(faker.definitions.company.descriptor);
    },

    catchPhraseNoun: function () {
        return faker.random.array_element(faker.definitions.company.noun);
    },

    bsAdjective: function () {
        return faker.random.array_element(faker.definitions.company.bs_adjective);
    },

    bsBuzz: function () {
        return faker.random.array_element(faker.definitions.company.bs_verb);
    },

    bsNoun: function () {
        return faker.random.array_element(faker.definitions.company.bs_noun);
    }

};

module.exports = company;
