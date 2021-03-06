import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class BookRoute extends Route {

  @service store;

  async model(params) {
    return this.store.findRecord('book', params.book_id);
  }
  
}
