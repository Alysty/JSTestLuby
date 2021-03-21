const router = require('express').Router();
const db = require('../config/database');
const Stars = require('../models/Stars');

router.get('/', (req, res)=>{
    return Stars.findAll()
    .then(stars => {
        data = {"data":{stars}, count: stars.length}
        res.send(data);
    })
    .catch(err=>console.log(err));
})


router.route('/add').post((req, res)=>{
    
    const {data} = req.body;
    let {voter_id, repo_id, amount_of_stars} = data;
    Stars.create({
        voter_id,
        repo_id,
        amount_of_stars
    })
        .then(user => res.redirect('/stars'))
        .catch( err => {console.log(err); res.sendStatus(400)})
});

module.exports = router ;