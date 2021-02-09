FROM node:12.7.0
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
#RUN npm cache clean --force
RUN npm install
COPY . /usr/src/app
CMD ["npm", "start"]
#CMD
