var app = document.querySelector('#app');
app.route = 'home';

// Define routes
page('/', home);
page('/portfolio', portfolio);
page('/contact', contact);
page({ hashbang: true });

function home() {
  app.route = 'home';
}

function portfolio() {
  app.route = 'portfolio';
}

function contact() {
  app.route = 'contact';
}

document.addEventListener('template-bound', function() {
  
  var headerPanel = document.querySelector('[main]');
  var pages = document.querySelector('core-pages');

  pages.addEventListener('core-select', function(e) {

    // Only handle the event once
    if (e.detail && e.detail.isSelected) {
      headerPanel.scroller.scrollTop = 0;
    }

  });

});
