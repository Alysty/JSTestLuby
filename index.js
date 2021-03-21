const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());

const db = require('./config/database');
/* 
Test 
db.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.log(err))
*/



app.get('/', (req, res)=>{
    res.send('This Api was made by Pedro Paulo Pastore Jorge \n this api is made for an github type app')
})

/*
app.get('/api/users/:id', (req,res)=>{
    res.send(req.params);
    if ? use req.query to get ?... as object
})

*/

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

const repositoriesRouter = require('./routes/repositories');
app.use('/repositories', repositoriesRouter);

const port = process.env.PORT || 3000;
app.listen(port, ()=>{ console.log(`The server is now running on ${port}`)})