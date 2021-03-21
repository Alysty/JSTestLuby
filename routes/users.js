const router = require('express').Router();
const db = require('../config/database');
const User = require('../models/User');
const Tokens = require('../models/Tokens')
const { route } = require('./stars');


// Route to get all the users
router.get('/', (req, res)=>{
    User.findAll()
        .then(
            user => {
                console.log(user[0].dataValues)
                data = {"data":{user}, count: user.length}
                res.send(data);
        })
        .catch( err => {console.log(err); res.sendStatus(400)})
})

//Route to get a specific user
router.get("/find/:id", (req, res)=>{
    User.findAll({
        where:{
            id: req.params.id
        }
    })
        .then(
            user => {
                data = {"data":{user}, count: user.length}
                res.send(data);
        })
        .catch( err => {console.log(err); res.sendStatus(400)})
        
})

//Route to add an user
router.route('/add').post((req, res)=>{
    
    const {data} = req.body;
    let {username, email, bio, avatar, location} = data;
    User.create({
        username,
        email,
        location,
        bio,
        avatar
    })
        .then(user => res.redirect('/users'))
        .catch( err => {console.log(err); res.sendStatus(400)})
});


//Route to delete an user
router.delete('/delete/:id', (req,res)=>{
    User.destroy({
            where:{
                id: req.params.id
            }
        }
    )
        .then(()=> res.send("entry was deleted"))
        .catch( err => {console.log(err); res.sendStatus(400)})
})


//Route to update an user
router.put('/edit', (req, res)=>{
    let {id, username, email, bio, avatar, location} = req.query
    
    User.update({
        username: username,
        email: email,
        bio: bio,
        avatar: avatar, 
        location: location
    },{
        where: {id: id}
    })
        .then(()=> res.send("entry was updated"))
        .catch( err => {console.log(err); res.sendStatus(400)})
})

//Route to check if user exists and log their uses of the api
router.get('/authentication', (req, res)=>{
    User.findAll({
        where:{
            id: req.query.id
        }
    })
        .then(
            user => {
                if(user.length == 1){
                    let {id} = user[0].dataValues; 
                    let user_id = id
                    Tokens.create({
                       user_id
                    })
                    .then(()=> res.send('user authenticated'))
                    .catch( err => {console.log(err); res.sendStatus(400)})   
                }
                else{
                    res.send('user not found')
                }
        })
        .catch( err => {console.log(err); res.sendStatus(400)})
        
})
module.exports = router ;