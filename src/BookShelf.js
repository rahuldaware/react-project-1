import React from 'react'
import Books from './Books'
class BookShelf extends React.Component {
render() {
  const books = this.props.books;
  return(
    <div>
      <ol className="books-grid">
        {
          books.map((book) => {
            return(
              <li key={book.id}>
                <Books book={book} />
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
