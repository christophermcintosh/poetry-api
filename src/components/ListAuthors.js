import React from 'react';
import { Link } from 'react-router-dom';

const ListAuthors = ({ listOfAuthors, toggleDrawer }) => {
  return (
    <div id="list-authors">
      <ul>
        {listOfAuthors.map((author, index) => {
          return (
            <li key={index} onClick={toggleDrawer('left', false)}>
              <Link to={`/poetry-api/author/${author}`}>
                <p>{author}</p>
                <hr />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListAuthors;
