#! /bin/bash
# Copyright 2017 Google Inc.
# 
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
# 
#      http://www.apache.org/licenses/LICENSE-2.0
# 
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.


# Update git submodules
git submodule init
git submodule update

# If already in a VIRTUAL_ENV assume the person knows what they are doing,
# otherwise set up a python virtualenv with all the needed requirements.
if [ x$VIRTUAL_ENV == x"" ]; then
  cd tools/python
  source setup.sh
  cd ../..
fi

exec python tools/python/run-tests.py "$@"
