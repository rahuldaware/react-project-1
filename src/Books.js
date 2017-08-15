import React from 'react'

class Books extends React.Component {
  onOptionChange = (bookId, value) => {
    this.props.onUpdateShelf(bookId, value);
  }
    render() {
      const book = this.props.book;
      const image = book.imageLinks.thumbnail;
      const backgroundImage = `url("${image}")`;
      return (
        <div>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 188, background: backgroundImage}}></div>
                <div className="book-shelf-changer">
                  <select
                    value = {book.shelf}
                    onChange={(e) => this.onOptionChange(book.id, e.target.value)}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors[0]}</div>
          </div>
        </div>

      )
    }
}

export default Books;
