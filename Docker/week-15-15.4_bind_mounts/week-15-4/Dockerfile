FROM node:21

WORKDIR /nextapp

COPY package* .

RUN npm install

COPY . .

CMD ["npm","run","dev"]
