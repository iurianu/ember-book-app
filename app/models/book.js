import Model, { attr } from '@ember-data/model';

export default class BookModel extends Model {
  @attr title;
  @attr author;
  @attr publisher;
  @attr isbn;
  @attr genre;
  @attr image;
  @attr description;

}
