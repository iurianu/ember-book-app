import Component from '@glimmer/component';

function normalizeText(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

export default class BooksFilterComponent extends Component {

  get results() {
    let { books, query } = this.args;

    if (query) {
      books = books.filter((book) => normalizeText(book.title).toLowerCase().includes(query));
    }

    return books;
  }
}