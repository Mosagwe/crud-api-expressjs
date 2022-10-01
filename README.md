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
First, start by creating a directory for the project/ application
```
mkdir expressjs-api
cd expressjs-api
```

Clone the project by running:
```
git clone https://github.com/Mosagwe/crud-api-expressjs.git

```
### .env file
Generate **.env** file from the **.env-example**
```
cp .env-example .env
```
Configure the environment variables according to your server setup.

### Start the application
```
npm start
```

### Test the RESTful API
You can use [Postman](https://postman.com) to test the APIs.







