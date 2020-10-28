FROM node:12.18.0-alpine

COPY ./ /dist
WORKDIR /dist

RUN yarn;

CMD ["node", "www.js"]

EXPOSE 13000
