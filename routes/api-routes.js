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
        console.log(req.body)
        db.Note.create(req.body)
            .then(function(dbNote) {
                // If a Note was created successfully, find one Article with an `_id` equal to `req.params.id`. Update the Article to be associated with the new Note
                // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
                // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
                return db.Deal.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
            })
            .then(function(dbDeal) {
                // If we were able to successfully update an Article, send it back to the client
                res.json(dbDeal);
            })
            .catch(function(err) {
            // If an error occurred, send it to the client
            res.json(err);
            });
    })
}