const router = require('express').Router();
const db = require('../config/database');
const Repositories = require('../models/Repositories');

//Route to get all repositories
router.get('/', (req, res)=>{
    Repositories.findAll()
        .then(
            repositories => {
                data = {"data":{repositories}, count: repositories.length}
                res.send(data);
        })
        .catch( err => {console.log(err); res.sendStatus(400)})
})


//Route to get a specific repositorie
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


//Route to add a specific repositorie
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

//Route to delete a specific repositorie
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

//Route to update a specific star rating
router.put('/edit', (req, res)=>{
    let {id, owner_id, name, description, is_public, slug} = req.query
    
    Repositories.update({
        owner_id: owner_id,
        name: name, 
        description: description, 
        is_public: is_public, 
        slug: slug
    },{
        where: {id: id}
    })
        .then(()=> res.send("entry was updated"))
        .catch( err => {console.log(err); res.sendStatus(400)})
})
module.exports = router ;