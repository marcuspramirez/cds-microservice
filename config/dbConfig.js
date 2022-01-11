// store the configuration secrets of the PG DB here
module.exports = {
    HOST: 'database-101.cygdjodetqbq.us-east-1.rds.amazonaws.com', // your endpoint
    USER: 'postgres_cds', // your username
    PASSWORD: 'useless123', // your password
    DB: 'certificate_of_deposit', // your db name
    dialect: 'postgres',
    }