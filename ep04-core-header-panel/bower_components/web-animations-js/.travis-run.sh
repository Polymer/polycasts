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


set -x

if [ x$MODE == x'check' ]; then
  SUCCESS=0

  # Check that the testcases json file has been updated
  echo "Checking test cases is up to date..."
  python ./test/update-testcases.py --dry-run
  let "SUCCESS += $?"

  # Check that the web-animations.js file passes lint checks
  ./run-lint.sh
  let "SUCCESS += $?"

  exit $SUCCESS
else
  # For pull requests we don't have access to secure environment variables, so we just return true.
  if [ x$BROWSER == "xRemote" -a x$SAUCE_ACCESS_KEY == x"" ]; then
    exit 0
  fi

  if [ x$BROWSER == "xAndroid-Chrome" ]; then
    echo ./run-tests-android.sh $ARGS | bash || exit 1
  else
    echo ./run-tests.sh $ARGS | bash || exit 1
  fi
fi
