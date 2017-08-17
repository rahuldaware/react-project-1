import React from 'react'
import BookShelf from './BookShelf'

class BookShelves extends React.Component {
  filterShelf = (bookMap, shelfName) => {
    let bookList = []
    let filteredBooks = []
    bookMap.forEach((value, key, map) => {
      bookList.push(value)
    })
    filteredBooks = bookList.filter((book) => {return book.shelf === shelfName})
    return filteredBooks
  }
  render(){
    return (
      <div>
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <BookShelf
                    books={this.filterShelf(this.props.books, "currentlyReading")}
                    onUpdateShelf={this.props.onUpdateShelf} />
                </div>

            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                  <BookShelf
                    books={this.filterShelf(this.props.books, "wantToRead")}
                    onUpdateShelf={this.props.onUpdateShelf} />
                </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <BookShelf
                    books={this.filterShelf(this.props.books, "read")}
                    onUpdateShelf={this.props.onUpdateShelf} />
                </div>
            </div>
          </div>
      </div>

    )
  }
}

export default BookShelves;
