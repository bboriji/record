FROM node:12.18.0-alpine

COPY ./ /dist
WORKDIR /dist

RUN yarn;

CMD ["yarn", "start"]

EXPOSE 13000
