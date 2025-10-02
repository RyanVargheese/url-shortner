FROM node:24

WORKDIR /app

COPY package*.json .
RUN npm install

COPY . .

EXPOSE 5001

CMD ["npm","run","start"]