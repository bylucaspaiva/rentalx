FROM node

WORKDIR /usr/app

# copy package.json to /usr/app
COPY package.json ./

RUN npm install 

#copy everything to /usr/app
COPY . . 

EXPOSE 3333 

CMD ["npm", "run", "dev"]