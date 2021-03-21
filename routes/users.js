const router = require('express').Router();
const db = require('../config/database');
const User = require('../models/User');
const path = require('path');
const fs = require('fs');

const imgFilepath = path.resolve(__dirname, '../images/output.jpeg');
const profilePicture = Buffer.from(fs.readFileSync(imgFilepath));

router.get('/', (req, res)=>{
    return User.findAll()
    .then(user => {
        console.log(user);
        res.sendStatus(200);
    })
    .catch(err=>console.log(err));
})


router.route('/add').post((req, res)=>{
    const data = {
        username:'bruv',
        email:'bruv@gmail.com',
        location:"london streets",
        bio:"innit mate?",
        avatar:profilePicture
    }
    let {username, email, bio, avatar, location} = data;
    User.create({
        username,
        email,
        location,
        bio,
        avatar
    })
        .then(user => res.redirect('/users'))
        .catch( err => {console.log(err); res.send(400)})
});

module.exports = router ;