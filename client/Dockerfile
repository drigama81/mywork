FROM node:13.12.0-alpine
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
ENV PATH /app/node_modules/.bin:$PATH

COPY package.json .
RUN npm install
RUN npm install react-scripts -g
COPY . ./

EXPOSE 3000

CMD [ "npm", "start" ]