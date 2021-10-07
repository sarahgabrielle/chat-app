FROM node:14-alpine

# Create app directory
WORKDIR /app

# Install app dependencies
COPY package*.json ./

RUN npm install 
# Add command for building code for production using `RUN npm ci --only=production`

# Bundle app source
COPY . .

EXPOSE 3000
CMD ["node", "index.js"]
# OR CMD ["npm", "start"]