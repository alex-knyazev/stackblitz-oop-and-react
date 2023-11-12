import { FC, useEffect, useState } from 'react';
import { Book } from './Book';

import './style.css';

export const App: FC<{ name: string }> = ({ name }) => {
  const [book, setBook] = useState(new Book());

  useEffect(() => {
    book.setTitle('Пикник на обочине');
    book.setAuthor('Братья Стругацкие');
    book.setPublicationYear(1972);
  });

  return (
    <div>
      <h1>Book creation</h1>
      <p>title</p>
      <input
        type="text"
        id="title"
        value={book.title}
        onChange={(e) => {
          book.setTitle(e.target.value);
        }}
      />

      <p>author</p>
      <input
        type="text"
        id="author"
        value={book.author}
        onChange={(e) => {
          book.setAuthor(e.target.value);
        }}
      />

      <p>publicationYear</p>
      <input
        type="number"
        id="publicationYear"
        value={book.publicationYear}
        onChange={(e) => {
          book.setPublicationYear(parseInt(e.target.value));
        }}
      />

      <p>optionalProperty</p>

      <h1>Result</h1>
      <p>title</p>
      <p id="title">{book.title}</p>

      <p>author</p>
      <p id="author">{book.author}</p>

      <p>publicationYear</p>
      <p id="publicationYear">{book.publicationYear}</p>
    </div>
  );
};
