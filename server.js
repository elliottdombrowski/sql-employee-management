// REQUIRE EXPRESS.JS
const express = require('express');
// REQUIRE MYSQL
const mysql = require('mysql2');

// DECLARE PORT TO LISTEN ON - LOCAL && DYNAMIC
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// CONNECT TO MYSQL DATABASE
const db = mysql.createConnection(
    {
        host: 'localhost',
        // MYSQL USERNAME
        user: 'root',
        // ADD MYSQL PASSWORD
        // TODO - REMOVE MY PASSWORD BEFORE DEPLOY
        password: 'Ajira316!',
        // TODO - ADD DATABASE
        database: ''
    },
    console.log("connected to **TODO - INSERT DATABASE NAME** database.")
);




app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});