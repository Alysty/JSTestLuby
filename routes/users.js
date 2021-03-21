const router = require('express').Router();
const db = require('../config/database');
const User = require('../models/User');

router.get('/', (req, res)=>{
    return User.findAll()
    .then(user => {
        data = {"data":{user}, count: user.length}
        res.send(data);
    })
    .catch(err=>console.log(err));
})


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

module.exports = router ;