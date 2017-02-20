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

var phone = {
    phoneNumber: function (format) {
        format = format || faker.phone.phoneFormats();
        return faker.helpers.replaceSymbolWithNumber(format);
    },

    // FIXME: this is strange passing in an array index.
    phoneNumberFormat: function (phoneFormatsArrayIndex) {
        phoneFormatsArrayIndex = phoneFormatsArrayIndex || 0;
        return faker.helpers.replaceSymbolWithNumber(faker.definitions.phone_number.formats[phoneFormatsArrayIndex]);
    },

    phoneFormats: function () {
      return faker.random.array_element(faker.definitions.phone_number.formats);
    }

};

module.exports = phone;
