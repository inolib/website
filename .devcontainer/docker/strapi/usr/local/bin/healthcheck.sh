#!/usr/bin/env bash

set -e
set -o pipefail
set -u

cd /@inolib/website/packages/app-strapi

if [ ! -f '.done' ]
then
  exit 1
fi
