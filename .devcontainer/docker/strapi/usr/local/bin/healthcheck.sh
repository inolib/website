#!/usr/bin/env bash

set -e
set -o pipefail
set -u

curl --request OPTIONS localhost:1337
