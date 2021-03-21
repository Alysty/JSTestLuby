const router = require('express').Router();
const db = require('../config/database');
const Users_Followers = require('../models/Users_Followers');

router.get('/', (req, res)=>{
    return Users_Followers.findAll()
    .then(users_followers => {
        data = {"data":{users_followers}, count: users_followers.length}
        res.send(data);
    })
    .catch(err=>console.log(err));
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

module.exports = router ;