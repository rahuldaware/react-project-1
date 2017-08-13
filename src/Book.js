import React, {Component } from 'react'

class Book extends Component {
  render() {
    return(
      <div>
        {console.log(this.props)}
        <li>
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: this.props.book.width, height: this.props.book.height, backgroundImage: this.props.book.backgroundImage }}></div>
              <div className="book-shelf-changer">
                <select>
                  <option value="none" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{this.props.book.title}</div>
            <div className="book-authors">{this.props.book.author}</div>
          </div>
        </li>
      </div>
    )
  }
}
export default Book;
