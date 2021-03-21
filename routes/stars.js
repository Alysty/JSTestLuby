const router = require('express').Router();
const db = require('../config/database');
const Stars = require('../models/Stars');


//Route to get a all user stars rating
router.get('/', (req, res)=>{
        Stars.findAll()
        .then(
            stars => {
                data = {"data":{stars}, count: stars.length}
                res.send(data);
        })
        .catch( err => {console.log(err); res.sendStatus(400)})
})


//Route to get a specific star rating 
router.get("/find/:id", (req, res)=>{
    Stars.findAll({
        where:{
            repo_id: req.params.id
        }
    })
        .then(
            stars => {
                data = {"data":{stars}, count: stars.length}
                res.send(data);
        })
        .catch( err => {console.log(err); res.sendStatus(400)})
        
})

//Route to add a specific star rating 
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

//Route to delete a specific star rating 
router.delete('/delete/:id', (req,res)=>{
    Stars.destroy({
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
    let {id, voter_id, repo_id } = req.query
    
    Stars.update({
        voter_id: voter_id,
        repo_id: repo_id
    },{
        where: {id: id}
    })
        .then(()=> res.send("entry was updated"))
        .catch( err => {console.log(err); res.sendStatus(400)})
})
module.exports = router ;