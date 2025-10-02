FROM node:24

WORKDIR /app
# / means root dir

COPY package*.json .
# copying the package.json to WORKDIR
RUN npm install
# installing all dependencies

COPY . .
# copying everything from . to WORKDIR

EXPOSE 5173
#Exposing a particular port for the application to connect to external environment

CMD ["npm", "start"]
#it would run once container is built
