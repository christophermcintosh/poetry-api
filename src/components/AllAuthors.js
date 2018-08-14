import React from 'react';
import { Link } from 'react-router-dom';

const AllAuthors = ({ listOfAuthors }) => {
  if (!listOfAuthors) return null;

  return (
    <div>
      <ul>
        {listOfAuthors.authors.map((author, index) => {
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

export default AllAuthors;
