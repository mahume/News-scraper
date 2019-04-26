const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

axios.get('https://www.reddit.com/r/technews/').then(res => {
  const $ = cheerio.load(res.data);
  const results = [];
  $('h2').each((i, element) => {
    const title = $(element).text();
    const link = $(element)
      .children()
      .attr('href');
    const image = $(element);
    results.push({
      title,
      link,
      image,
    });
  });
  console.log(results);
});
