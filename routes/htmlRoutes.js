const Article = require('../models/Article');

module.exports = app => {
  // Index page
  app.get('/', (req, res, next) => {
    res.render('index');
  });
  app.get('/articles', (req, res) => {
    Article.find({}).then(dbArticle =>
      res.render('articles', { data: dbArticle })
    );
  });
  // Render 404 page for any unmatched routes
  app.get('*', (req, res) => {
    res.render('404');
  });
};
