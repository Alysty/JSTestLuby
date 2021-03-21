const router = require('express').Router();
const db = require('../config/database');
const Repositories = require('../models/Repositories');

router.get('/', (req, res)=>{
    return Repositories.findAll()
    .then(repositories => {
        data = {"data":{repositories}, count: repositories.length}
        res.send(data);
    })
    .catch(err=>console.log(err));
})


router.route('/add').post((req, res)=>{
    
    const {data} = req.body;
    let {owner_id,name,description, is_public,slug} = data;
    Repositories.create({
        owner_id,
        name,
        description,
        is_public,
        slug

    })
        .then(user => res.redirect('/repositories'))
        .catch( err => {console.log(err); res.sendStatus(400)})
});

module.exports = router ;