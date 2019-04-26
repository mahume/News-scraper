const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

axios.get('https://www.smartbrief.com/industry/tech').then(res => {
  const $ = cheerio.load(res.data);
  const results = [];

  $('div[class=multi-summary-wrapper]').each((i, element) => {
    const title = $(element)
      .children('.multi-summary-title')
      .text()
      .trim();
    const summary = $(element)
      .children('.multi-summary-body')
      .text()
      .trim();
    const link = $(element)
      .children('.multi-summary-source')
      .children('a')
      .attr('href');

    results.push({
      title,
      summary,
      link,
    });
  });
  console.log(results);
});
