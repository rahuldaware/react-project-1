import React from 'react'
import Books from './Books'
class BookShelf extends React.Component {
render() {
    const books = this.props.books;
    const bookList = [];
    books.forEach((book, key, map) => {
      bookList.push(book);
    })
    return(
      <div>
        <ol className="books-grid">
        {
          bookList.map((book) => {
            return(
              <li key={book.id}>
                <Books
                  book={book}
                  onUpdateShelf={this.props.onUpdateShelf}/>
              </li>
            )
          })
        }
        </ol>
      </div>
    )
  }
}

export default BookShelf;
