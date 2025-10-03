FROM node:24 AS builder

WORKDIR /app
# / means root dir

COPY package*.json .
# copying the package.json to WORKDIR
RUN npm install
# installing all dependencies

COPY . .
# copying everything from . to WORKDIR

# create the 'dist' folder
RUN npm run build

FROM node:24
WORKDIR /app
# Copy only the necessary files for production
COPY package*.json ./
RUN npm install --omit=dev
COPY --from=builder /app/dist ./dist

EXPOSE 5173
#Exposing a particular port for the application to connect to external environment

CMD ["npm", "start"]
#it would run once container is built
