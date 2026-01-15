FROM node:20 
WORKDIR /app

COPY ./package*.json ./

RUN npm install
RUN npm install -g serve

COPY . .

EXPOSE 3000 

RUN npm run build 

CMD ["serve", "out", "-l", "3000"]
