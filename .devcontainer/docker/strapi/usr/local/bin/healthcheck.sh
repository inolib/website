#!/usr/bin/env bash

set -e
set -o pipefail
set -u

curl --head --request HEAD localhost:1337
