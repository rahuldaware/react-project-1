import React from 'react'
import {Link } from 'react-router-dom';
import BookShelf from './BookShelf';

class Search extends React.Component {

  render() {
    return(
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
            <input type="text"
              placeholder="Search by title or author"
              onChange={(e) => {
                this.props.onSearch(e.target.value)
              }} />
            </div>
          </div>
          <div className="search-books-results">
            <BookShelf
              books={this.props.books}
              onUpdateShelf={this.props.onUpdateShelf} />
          </div>
        </div>
      </div>
    )
  }
}

export default Search;
