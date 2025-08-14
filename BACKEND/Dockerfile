FROM node:24

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .

ENV MONGO_URI="mongodb://mongodb:27017/url-shortener"

EXPOSE 5001

CMD ["npm","run","start"]