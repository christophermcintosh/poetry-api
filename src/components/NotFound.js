import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="text-center m-5">
      <h1>Page Not Found</h1>
      <p>
        <Link to="/poetry-api">Return</Link>
      </p>
    </div>
  );
};

export default NotFound;
