FROM node:16
RUN mkdir -p /home/apps/project-react
WORKDIR /home/apps/project-react
COPY package*.json ./
COPY . .
RUN npm install

EXPOSE 3000
CMD ["npm", "start"]
