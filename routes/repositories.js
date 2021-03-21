const router = require('express').Router();
const db = require('../config/database');
const Repositories = require('../models/Repositories');

router.get('/', (req, res)=>{
    Repositories.findAll()
        .then(
            repositories => {
                data = {"data":{repositories}, count: repositories.length}
                res.send(data);
        })
        .catch( err => {console.log(err); res.sendStatus(400)})
})

router.get("/find/:id", (req, res)=>{
    Repositories.findAll({
        where:{
            id: req.params.id
        }
    })
        .then(
            repositories => {
                data = {"data":{repositories}, count: repositories.length}
                res.send(data);
        })
        .catch( err => {console.log(err); res.sendStatus(400)})
        
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


router.delete('/delete/:id', (req,res)=>{
    Repositories.destroy({
            where:{
                id: req.params.id
            }
        }
    )
        .then(()=> res.send("entry was deleted"))
        .catch( err => {console.log(err); res.sendStatus(400)})
})

module.exports = router ;