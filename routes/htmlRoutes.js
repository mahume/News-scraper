module.exports = app => {
  // Index page
  app.get('/', (req, res, next) => {
    res.render('index');
  });
  // Render 404 page for any unmatched routes
  app.get('*', (req, res) => {
    res.render('404');
  });
};
