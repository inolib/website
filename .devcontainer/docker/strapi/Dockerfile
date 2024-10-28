FROM node:20.18-alpine

ENV NODE_ENV="development"

ENV DATABASE_CLIENT="mysql"
ENV DATABASE_HOST="mariadb"
ENV DATABASE_PORT=3306
ENV DATABASE_NAME="rule2835_strapi"
ENV DATABASE_USERNAME="root"
ENV DATABASE_PASSWORD="root"

ENV ADMIN_JWT_SECRET="xlfGEpYuHNne99KV"
ENV API_TOKEN_SALT="Yx2u2jYB6Ov9UDCA"
ENV APP_KEYS="PBfHzb5dQQxCC6yA"
ENV JWT_SECRET="wRK7qKDhoBXxcVWM"
ENV TRANSFER_TOKEN_SALT="laDPnQrKAI516vp4"

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
