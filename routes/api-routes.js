// dependencies for mongodb database
const db = require('../models');

// Routes
// =============================================================
module.exports = function(app) {
    // API route to get all deals
    app.get("/api/deals", function(req,res){
        // find all deals then result the json deals
        db.Deal.find({}).then((dbDeal)=>{
            res.json(dbDeal)
        }).catch((error)=>{
            res.json(error)
        })
    })

    // API route to get deal by id
    app.get('/api/deals/:id', function(req,res){
        db.Deal.findOne({_id:req.params.id})
        // find one by id and populate all of the notes associated with that id
            .populate('note')
            // then respond with the json of deal data
            .then((dbDeal)=>{
                res.json(dbDeal)
            // catch any error
            }).catch((error)=>{
                res.json(error)
            })
    })

    // API route to post (saving/updating) a note associated with deal id
    app.post('/api/deals/:id', function(req,res){
        db.Note.create(req.body).then((dbNote)=>{
            // If a Note was created successfully before, 
            // find one deal by id and update the deal with the new note
            // {new: true} tells the query that we want it to return the updated Deal it returns the original by default
            // use a promise then once that query is done to respond with the data
            console.log('this is the note to be created', dbNote)
            return db.Deal.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
        }).then((dbDeal)=>{
            res.json(dbDeal);
        }).catch((error)=>{
            res.json(error);
        })
    })
}