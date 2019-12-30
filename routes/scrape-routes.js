// Web Scapping Tools
// Axios is a promise-based HTTP library, similar to Jquery ajax method
// Axios works on the client and on the server
const cheerio = require('cheerio');
const axios = require('axios');

// dependencies for mongodb database
const db = require('../models');

// Routes
// =============================================================
module.exports = function(app) {
    app.get("/scrape", function(req, res) {
        // First, we grab the body of the html with axios
        axios.get("https://slickdeals.net/deals/").then(function(response) {
            // Then, we load that into cheerio and save it to $ for a shorthand selector
            var $ = cheerio.load(response.data);
            var scrapeDB = [];
            // Now, we grab every h2 within an article tag, and do the following:
            $(".dealRow").each(function(i, element) {
                // Save an empty result object
                
                var result = {}
                // Add the text and href of every link, and save them as properties of the result object
                result.title = $(this).children('.mainDealInfo').children('a').children('img').attr('alt');
                result.link = "https://slickdeals.net" + $(this).children('.mainDealInfo').children('a').attr('href');
                result.imageURL = $(this).children('.mainDealInfo').children('a').children('img').attr('data-original');
        
                scrapeDB.push(result);

                // Testing & Debugging the results
                // console.log(result)

                // // create new deal using the result object from scapping and catch any errors
                // db.Deal.create(result).then(function(dbDeal){
                //     // console.log(dbDeal)
                //     console.log("data scaped has been saved")
                // }).catch(function(error){
                //     console.log(error)
                // })
            });

            // Send response to the client
            res.json(scrapeDB)
            // console.log(scrapeDB)
        });
    });
}
