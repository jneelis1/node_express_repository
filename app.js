const express = require('express')
const app = express()
const port = process.env.port || 3000;

const mysql = require('mysql');

const con = mysql.createConnection({
    host: "web-scraper.c78qxjw1gccg.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "Capstone2020"
});



app.get('', (req, res) => {
    con.connect(function(err) {
        con.query(`SELECT * FROM Capstone.scrapes`, function(err, result, fields) {
            if (err) res.send(err);
            if (result) res.send(result[0]["textfound"]);
        });
    });
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })

;