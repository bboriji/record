FROM node:12.18.0-alpine

WORKDIR /dist

COPY ./package.json /dist/package.json
COPY ./yarn.lock /dist/yarn.lock

RUN yarn;

COPY ./src /dist/src
COPY ./bin /dist/bin

CMD ["yarn", "start"]

EXPOSE 13000
