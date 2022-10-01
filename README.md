# CRUD API NodeJS - ExpressJS using PostgreSQL
This is a simple API creation using PostgreSQL and ExpressJS framework for the backend.
These are the packages installed:
* dotenv - to create .env file
* pg - to connect to postgresql database

## PostgreSQL Database table
Create the table using the following DML command:
```
CREATE TABLE products(
    id SERIAL PRIMARY KEY,
    name varchar(255),
    description varchar(255),
    weight varchar(255)
);
```





