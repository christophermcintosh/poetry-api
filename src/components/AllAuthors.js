import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { fetchAuthors } from './store';
import author from './store/author';

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
