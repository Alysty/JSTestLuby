const router = require('express').Router();
const db = require('../config/database');
const Users_Followers = require('../models/Users_Followers');

// Route to get all the users followers relations
router.get('/', (req, res)=>{
    Users_Followers.findAll()
        .then(
            users_followers => {
                data = {"data":{users_followers}, count: users_followers.length}
                res.send(data);
        })
        .catch( err => {console.log(err); res.sendStatus(400)})
    })


//Route to get a specific user follower relation
router.get("/find/:id", (req, res)=>{
    Users_Followers.findAll({
        where:{
            id: req.params.id
        }
    })
        .then(
            users_followers => {
                data = {"data":{users_followers}, count: users_followers.length}
                res.send(data);
        })
        .catch( err => {console.log(err); res.sendStatus(400)})
        
})


//Route to add a specific user follower relation
router.route('/add').post((req, res)=>{
    
    const {data} = req.body;
    let {user_id, follower_id} = data;
    Users_Followers.create({
        user_id,
        follower_id
    })
        .then(user => res.redirect('/users_followers'))
        .catch( err => {console.log(err); res.sendStatus(400)})
});


//Route to delete a specific user follower relation
router.delete('/delete/:id', (req,res)=>{
    Users_Followers.destroy({
            where:{
                id: req.params.id
            }
        }
    )
        .then(()=> res.send("entry was deleted"))
        .catch( err => {console.log(err); res.sendStatus(400)})
})

//Route to update a specific user follower relation
router.put('/edit', (req, res)=>{
    let {id, user_id, follower_id } = req.query
    
    Users_Followers.update({
        user_id: user_id,
        follower_id: follower_id
    },{
        where: {id: id}
    })
        .then(()=> res.send("entry was updated"))
        .catch( err => {console.log(err); res.sendStatus(400)})
})
module.exports = router ;