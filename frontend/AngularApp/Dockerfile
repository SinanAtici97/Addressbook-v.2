FROM node:19
WORKDIR /usr/src/app
COPY package.json ./
RUN ionic serve
COPY . .
EXPOSE 8100
CMD ng serve
