# Men base: a quick start base for MonogoDB Express Node stack

Men base is a simple and flexible quick start base to create fullstack webapps using Node, Express and MongoDB with MVC architecture. As far as it's still a "work in progress", this project will be updated quite often. When cloning this repo for a new project, don't forget to check for updates.

## Getting started

### Prerequisites

To run men-base, you need a recent version of Node, Express and MongoDB installed (obviously). If it's not the case, here are some useful links:

*[node](https://nodejs.org)
*[express](http://expressjs.com)
*[mongo](https://docs.mongodb.com/manual/installation)

### Before running the project

To run the project, be sure to have a mongoDB instance running. If it's not the case, run: 
```
$ mongod
```
For more information about the mongo shell, please refer to [documentation](https://docs.mongodb.com/manual/).

Then, edit package.json file by remplacing some fields values like "name", "description" and "version".

In helpers/db.js, replace 'mongodb://localhost:27017/men-base' by your own database uri.

### Run the project

To run the project simply type:
```
$ npm start
```

Great, you're done. Go to "localhost:3000", a start page using a MEN stack with MVC architecture is waiting for you.

## Sample files

Some sample files are coming with men base: 
* index.js -> controller
* sampleMongoMode -> model
* index.ejs -> view

 Don't hesitate to copy them and reuse their structure.

## Modules informations

Men base natively comes with ejs template system, fell free to change it if you prefer some other module like Jade.

Men base also use Mongoose. You can replace it with another ORM/ODM or directly with mongo driver but keep in mind that you'll have to create a new db helper.


## Architecture:

Men Base is made and think to be used this way:

```
Project
   |
   ---> bin
   |       |
   |       --->  www # Start file (used for custom configurations)
   |
   ---> controllers
   |
   ---> helpers # For miscellaneous operations
   |      |
   |       ---> db.js # For db connection
   |
   ---> models
   |
   ---> node_modules #Genrated by npm installs and 
   |    contains dependencies (do no edit manually)
   |
   ---> public #contains public data and files that can be send to client
   |       |
   |       ---> images # Images obvisouly
   |       |
   |       ---> javascripts # Js client side files
   |       |
   |       ---> stylesheets # Css files
   |
   ---> routes # Controllers managing routes and data to display on pages
   |       |
   |       ---> index.js # Sample controler for index page
   |
   ---> views
   |
   ---> app.js
   |
   ---> package.json # Application description
```

## License

Men-base is under MIT license.