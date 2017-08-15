import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelves from './BookShelves'
import Search from './Search'
import {Link } from 'react-router-dom'
import './App.css';

class BooksApp extends React.Component {

  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: true,
    books: []
  }

  componentDidMount() {
    if(this.state.books.length === 0) {
      BooksAPI.getAll().then(books => {
        this.setState(
            books = { books });
      })
    }
  }

  onUpdateShelf = (bookId, newShelf) => {
    const bookList = this.state.books;
    bookList.forEach((book) => {
      if(book.id === bookId) {
        book.shelf = newShelf;
      }
      this.setState({
        books : bookList
      });
    })
  }
  render() {
    return (
          <div className="App">
            <Route exact path="/" render={() => (
                <div className="list-books">
                  <div className="list-books-title">
                    <h1>MyReads</h1>
                  </div>
                  <div>
                    <BookShelves
                      books={this.state.books}
                      onUpdateShelf = {this.onUpdateShelf}/>
                  </div>
                </div>
              )} />
            <Route path="/search" render={({history}) => (
                <Search />
            )} />
            <div className="open-search">
              <Link to="/search">Add Book</Link>
            </div>
          </div>
    )
  }
}

export default BooksApp
