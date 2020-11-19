FROM node:12.18.0-alpine

WORKDIR /dist

COPY ./package.json /dist/package.json
COPY ./yarn.lock /dist/yarn.lock

RUN yarn;

COPY ./ /dist

RUN yarn build;

CMD ["yarn", "start"]

EXPOSE 3000
