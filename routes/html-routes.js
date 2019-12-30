const db = require('../models');


module.exports = function(app) {
    // Load index page
    app.get('/', function(req,res){
        res.render('index')
    })
    // Load index page
    app.get("/deals", function(req,res) {
        db.Deal.find({}).then((dbDeal)=>{
            res.render('deals',{
                // 'deal' is the same as the 'deal' in handlebar page
                deal: dbDeal
            })
            // console.log(dbDeal)
        })
    })
}