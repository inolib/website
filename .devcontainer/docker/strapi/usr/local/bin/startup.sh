#!/usr/bin/env bash

set -e
set -o pipefail
set -u

cd /@inolib/website/packages/app-strapi

if [ ! -f './package.json' ]
then
  pnpm create strapi --dbclient mysql --dbhost mariadb --dbname rule2835_strapi --dbpassword root --dbport 3306 --dbusername root --no-example --no-git-init --no-install --skip-cloud --typescript --use-pnpm .
fi

pnpm install
pnpm run build
pnpm run start
