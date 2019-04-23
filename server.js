const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const mongoose = require('mongoose');

const db = require('./models');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json);
app.use(express.static('public'));

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb://localhost/mongoHeadlines';

mongoose.connect(MONGODB_URI);

app.get('https://www.reddit.com/r/news/').then(function(res) {
  const $ = cheerio.load(res.data);
  const results = [];
  $('h2').each(function(i, element) {
    const text = $(element).text();
  });
});
