const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());

const db = require('./config/database');

// main page of the API
app.get('/', (req, res)=>{
    res.send('This Api was made by Pedro Paulo Pastore Jorge \n this api is made for an github type app')
})


//Routes of the API
const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

const repositoriesRouter = require('./routes/repositories');
app.use('/repositories', repositoriesRouter);

const usersFollowersRouter = require('./routes/users_followers');
app.use('/users_followers', usersFollowersRouter);

const starsRouter = require('./routes/stars');
app.use('/stars', starsRouter);

const port = process.env.PORT || 3000;
app.listen(port, ()=>{ console.log(`The server is now running on ${port}`)})