#!/usr/bin/env bash

set -e
set -o pipefail
set -u

cd /@inolib/website

corepack install
pnpm install

sleep infinity
