const scrapeBtn = $('#scrapeBtn');
const displayBtn = $('#displayBtn');

const API = {
  scrape() {
    return $.ajax({
      type: 'GET',
      url: 'api/scrape',
    });
  },
};

$(scrapeBtn).on('click', () => {
  API.scrape();
});

$(displayBtn).on('click', () => {
  window.location.reload();
});
