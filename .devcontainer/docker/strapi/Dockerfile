FROM node:20.18-alpine

ENV NODE_ENV="development"

COPY ./usr/local/bin /usr/local/bin/

CMD [ "startup.sh" ]

HEALTHCHECK CMD [ "healthcheck.sh" ]

USER root

RUN apk add --no-cache autoconf
RUN apk add --no-cache automake
RUN apk add --no-cache bash
RUN apk add --no-cache build-base
RUN apk add --no-cache gcc
RUN apk add --no-cache git
RUN apk add --no-cache libpng-dev
RUN apk add --no-cache nasm
RUN apk add --no-cache vips-dev
RUN apk add --no-cache zlib-dev

RUN corepack enable pnpm

USER node
