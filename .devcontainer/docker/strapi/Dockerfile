FROM node:20.18-alpine

ENV NODE_ENV="development"

ENV APP_KEYS="PBfHzb5dQQxCC6yA,SoJi3NkR99sSwIKC"

ENV DATABASE_CLIENT="mysql"
ENV DATABASE_HOST="mariadb"
ENV DATABASE_PORT=3306
ENV DATABASE_NAME="rule2835_strapi"
ENV DATABASE_USERNAME="root"
ENV DATABASE_PASSWORD="root"

COPY ./usr/local/bin /usr/local/bin/

USER root

RUN apk add --no-cache autoconf
RUN apk add --no-cache automake
RUN apk add --no-cache bash
RUN apk add --no-cache build-base
RUN apk add --no-cache curl
RUN apk add --no-cache gcc
RUN apk add --no-cache git
RUN apk add --no-cache libpng-dev
RUN apk add --no-cache nasm
RUN apk add --no-cache vips-dev
RUN apk add --no-cache zlib-dev

RUN corepack enable pnpm

USER node

CMD [ "startup.sh" ]

HEALTHCHECK CMD [ "healthcheck.sh" ]
