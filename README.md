# Awesome Deal
[![MIT Licensed](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)


## What is this repo?
The purpose of this app is to demonstrate how to scrape a website for content and create, read, update and delete the data collected from webscraping to mongoDB (noSQL database).

The user can scrape the website slickdeals for popular deals and add additional notes where he or she can retrieve. The deals and their notes are stored in mongoDB database, which can be accessed easily.

This is a great learning tool for beginner software engineer to understand the concept of MVC (Model-View-Controller), scrape the web and to query mongoDB data. 


## How is this repo useful?
This is a great learning tool for node js/javascript/mongoose/cherio/axios/Express-handlebars/Express beginners to get acquainted with the following concepts:

* Learn about mysql driver in mongoose. 
    * [mongoose package](https://www.npmjs.com/package/mongoose)
* Learn about Express-handlebars.
    * [express-handlebars package](https://www.npmjs.com/package/express-handlebars)
* The script is written in Node JS.
    * [Node JS](https://nodejs.org/en/)
* Learn about cheerio.
    * [cheerio](https://www.npmjs.com/package/cheerio)
* Learn about axios.
    * [axios](https://www.npmjs.com/package/axios)
* Learn about Express.
    * [express](https://www.npmjs.com/package/express)


## How to get Started?
1. clone the repository:
```git
git clone git@github.com:tmnguyen8/awesome-deal.git
```
* If your node js and npm installed, you can skip this step.
  * [Downloading and installing Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

2. Install the packages:
Navigate to your directory where this repo lives on your local machine and install the following packages:
```git
npm install
```

3. Deploy to Heroku and add mLab MongoDB:
Create a localhost database for testing the app on your machine. The schema and seeds files are located in the following directory ```./models```. Make sure you have a verified account with Heroku. Credit card will be required but as long as you select the free option, you will not be charged. Under Heroku app resources, look for mLab MongoDB and add the add-ons to your app. 

    * [Deploy to Heroku](https://devcenter.heroku.com/articles/heroku-cli)


## How does this work?
1. The user has the functionality of scraping the latest deals, save the deals, add notes, update notes, delete deal/note, and access the original website link

    [User Page](https://awesome-deal.herokuapp.com/)




