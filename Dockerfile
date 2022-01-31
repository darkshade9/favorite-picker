FROM node:17-alpine

COPY app /opt/app

WORKDIR /opt/app
RUN npm install

CMD ["node", "app.js"]