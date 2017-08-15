import React from 'react'
import BookShelf from './BookShelf'

class BookShelves extends React.Component {
  render(){
    const books = this.props.books;
    return (
      <div>
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <BookShelf books={books.filter((book) => {return book.shelf === "currentlyReading"})} />
                </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <BookShelf books={books.filter((book) => {return book.shelf === "wantToRead"})} />
                </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <BookShelf books={books.filter((book) => {return book.shelf === "read"})} />
                </div>
            </div>
          </div>
      </div>

    )
  }
}

export default BookShelves;
