FROM node:14-alpine
ADD . /flags
WORKDIR /flags
COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 80
CMD ["npm", "start"]
