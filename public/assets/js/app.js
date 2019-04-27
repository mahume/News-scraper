const scrapeBtn = $('#scrapeBtn');

const API = {
  scrape() {
    return $.ajax({
      headers: {
        'Content-Type': 'application/json',
      },
      type: 'GET',
      url: 'api/article',
      data: JSON.stringify(),
    });
  },
};

$(scrapeBtn).on('click', () => {
  API.scrape();
});
