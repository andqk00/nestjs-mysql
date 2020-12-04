FROM node:10

# Set the work directory
RUN mkdir -p /data/app

WORKDIR /data/app

# Use Cache Please
ADD . /data/app

RUN npm install && npm cache clean --force

# Add application files

EXPOSE 5007

CMD npm run start:dev