const router = require('express').Router();
const db = require('../config/database');
const Users_Followers = require('../models/Users_Followers');

router.get('/', (req, res)=>{
    Users_Followers.findAll()
        .then(
            users_followers => {
                data = {"data":{users_followers}, count: users_followers.length}
                res.send(data);
        })
        .catch( err => {console.log(err); res.sendStatus(400)})
    })

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

module.exports = router ;