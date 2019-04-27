const ArticleController = require('../controllers/articles_controller');

module.exports = app => {
  app.get('/api/article', ArticleController.scrape);
};
