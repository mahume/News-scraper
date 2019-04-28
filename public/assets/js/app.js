const scrapeBtn = $('#scrapeBtn');
const displayBtn = $('#displayBtn');

const API = {
  scrape() {
    return $.ajax({
      type: 'GET',
      url: 'api/scrape',
    });
  },
  display() {
    return $.ajax({
      type: 'GET',
      url: 'api/articles',
    });
  },
};

$(scrapeBtn).on('click', () => {
  API.scrape();
});

$(displayBtn).on('click', () => {
  API.display();
});
