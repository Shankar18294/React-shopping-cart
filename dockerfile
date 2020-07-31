# pull official base image
FROM node:latest

# set working directory
WORKDIR '/app'



# install app dependencies
COPY package.json .

RUN npm install -g create-react-app
RUN npm install 


# add app
COPY . .

# start app
CMD ["npm", "start"]
