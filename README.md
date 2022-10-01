# RESTful API NodeJS - Based on ExpressJS and PostgreSQL
This is a simple RESTful API creation based on ExpressJS framework  and postgreSQL as the database. It includes CRUD(Create, Read, Update and Delete) operations.
These are the packages installed:
* dotenv - to create .env file
* pg - to connect to postgresql database

## Getting started
### PostgreSQL Database table
> Uses PostgreSQL database

Create the table using the following DML command:
```
CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    name varchar(255),
    description varchar(255),
    weight varchar(255)
);
```
### Clone the project

Clone the project by running:
```
git clone https://github.com/Mosagwe/crud-api-expressjs.git

```

Change directory 
```
cd crud-api-expressjs
```

### Install node packages
```
npm install --save body-parser express dotenv cors pg
```
### Configure .env file
Generate **.env** file from the **.env-example**
```
cp .env-example .env 
```
* For Windows *
```
copy .env-example .env
```
Configure the environment variables according to your server setup.

### Start the application
```
npm start
```

### Test the RESTful API
You can use [Postman](https://postman.com) to test the APIs.

** Sample POST Json **
```
{
    "name":"Keyboard",
    "description":"The MX Keys made by Logitech Trademark",
    "weight":"0.8kg"
}
```







