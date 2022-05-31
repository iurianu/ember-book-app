import EmberRouter from '@ember/routing/router';
import config from 'books/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('favorites');
  this.route('contact', { path: '/contact-us' });
  this.route('book', { path: '/books/:book_id' });
});
