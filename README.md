# MERN-Full-Stack-Boilerplate
MERN Full Stack Boilerplate. Mysql database using sequelize as a connection to the database.(http://docs.sequelizejs.com/) Node as a backend and React as a Front end. To Start using this repo you must have npm and node and yarn and react installed. To install node go to https://nodejs.org/en/ and follow the instructions. To install run the command npm install yarn -g in to your terminal. The next thing to install should mysql workbench https://dev.mysql.com/downloads/workbench/. 
* create a .env.local file in the root directory similar to below, but with your database info:
```

```
DB_HOST=127.0.0.1
DB_USERNAME=root
DB_PASSWORD=ChangeMe123
DB_SCHEMA=example_db
DB_DIALECT=mysql
```

Next in your terminal on the repo run a yarn command which will download the files on the package.json file necessary for this app to run.

* run schema.sql simply to create the schema in mysql workbench/command line.  Sequelize will take care of creating tables based on models created in server/models folder.
* run ```yarn watch``` or ```npm run watch``` for instant update of client/server on changes and use localhost:3000 for any frontend work and localhost:3001 for any backend work.
* run ```yarn dev``` or ```npm run dev``` to build and run the built files locally.  Use localhost:3001 for both frontend and backend.  This is more similar to what would be deployed on prod.
* run ```yarn prod``` or ```npm run prod``` to build and run the built files locally.  Use localhost:3001 for both frontend and backend.  This is what would be deployed on prod.
* run ```yarn prod-build``` or ```npm run prod-build``` to build files for prod.  On prod server only files that need to be deployed are the build folder files.  The server just needs to run ```node app.js``` from the build folder to run.

Warning this app has already had the command yarn eject run. 
