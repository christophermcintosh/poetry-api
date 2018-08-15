import React from 'react';
import { Link } from 'react-router-dom';

const ListAuthors = ({ listOfAuthors }) => {
  return (
    <div>
      <ul>
        {listOfAuthors.map((author, index) => {
          return (
            <li key={index}>
              <Link to={`/author/${author}`}>{author}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListAuthors;
