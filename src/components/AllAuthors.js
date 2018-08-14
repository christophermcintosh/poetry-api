import React from 'react';
import { Link } from 'react-router-dom';

const AllAuthors = ({ listOfAuthors, isFetching }) => {
  if (isFetching) return <h1>Loading...</h1>;

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
