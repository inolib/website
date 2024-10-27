#!/usr/bin/env bash

set -e
set -o pipefail
set -u

curl --head localhost:1337
