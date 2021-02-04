FROM node:12.7.0
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
#RUN npm cache clean
RUN npm install
RUN pwd
COPY . /usr/src/app
EXPOSE 3200
CMD ["npm","start"]
