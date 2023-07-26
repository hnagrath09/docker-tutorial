## Docker Tutorial

Purpose of this project is to evolve a small server application to run in the docker container. I am building this with the mindset of a small start-up who would like to use docker to simplify the deployment process as well provide easy to use development environment for the developers.

### Step 1: Setup Server and DB

This project has been bootstraped using [NestJS](https://docs.nestjs.com) and [Prisma](https://prisma.io). I've created a Student module in the server with all the CRUD endpoints. Database schema for students can be found in prisma/schema.prisma file.

If you are setting up this project for the first time, you need to create database tables and run the migrations. First, you need to create DB and user in the postgres. I am using `myDb` as the database name and `himanshu` as the username.

After creating database, you need to generate relevant tables in the db. To do that, run the following command:

```bash
npx prisma generate
```

The server is running on port 3000 and the database is running on port 5432. To start the server and database, run the following command:

```bash
npm run start:dev
```

Eventually, we will try to run the server and database in the docker container. But for now, let's keep it simple.
