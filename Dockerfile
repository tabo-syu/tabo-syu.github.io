FROM node:12

ENV APPDIR /app/

WORKDIR $APPDIR

COPY package.json yarn.lock $APPDIR

RUN yarn install

COPY . $APPDIR

EXPOSE 3000
ENV HOST 0.0.0.0

CMD ["yarn", "dev"]
