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

var _name = {

    firstName: function () {
      if (typeof faker.definitions.name.male_first_name !== "undefined" && typeof faker.definitions.name.female_first_name !== "undefined") {
        // some locale datasets ( like ru ) have first_name split by gender. since the name.first_name field does not exist in these datasets,
        // we must randomly pick a name from either gender array so faker.name.firstName will return the correct locale data ( and not fallback )
        var rand = faker.random.number(1);
        if (rand === 0) {
          return faker.random.array_element(faker.locales[faker.locale].name.male_first_name)
        } else {
          return faker.random.array_element(faker.locales[faker.locale].name.female_first_name)
        }
      }
      return faker.random.array_element(faker.definitions.name.first_name)
    },

    lastName: function () {
      if (typeof faker.definitions.name.male_last_name !== "undefined" && typeof faker.defintions.name.female_last_name !== "undefined") {
        // some locale datasets ( like ru ) have last_name split by gender. i have no idea how last names can have genders, but also i do not speak russian
        // see above comment of firstName method
        var rand = faker.random.number(1);
        if (rand === 0) {
          return faker.random.array_element(faker.locales[faker.locale].name.male_last_name);
        } else {
          return faker.random.array_element(faker.locales[faker.locale].name.female_last_name);
        }
      }
      return faker.random.array_element(faker.definitions.name.last_name);
    },

    findName: function (firstName, lastName) {
        var r = faker.random.number(8);
        firstName = firstName || faker.name.firstName();
        lastName = lastName || faker.name.lastName();
        switch (r) {
        case 0:
            return faker.name.prefix() + " " + firstName + " " + lastName;
        case 1:
            return firstName + " " + lastName + " " + faker.name.suffix();
        }

        return firstName + " " + lastName;
    },

    prefix: function () {
        return faker.random.array_element(faker.definitions.name.prefix);
    },

    suffix: function () {
        return faker.random.array_element(faker.definitions.name.suffix);
    },

};

module.exports = _name;
