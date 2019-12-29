const db = require('../models');


module.exports = function(app) {
    // Load index page
    app.get("/", function(req,res) {
        db.Deal.find({}).then((dbDeal)=>{
            res.render('index',{
                // 'deal' is the same as the 'deal' in handlebar page
                deal: dbDeal
            })
            // console.log(dbDeal)
        })
    })
}