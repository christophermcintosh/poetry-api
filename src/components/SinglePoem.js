import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Flower from './Flower';

class SinglePoem extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    const { authorName, poemTitle } = this.props.match.params;
    const { poem } = this.props.location.state;

    return (
      <div>
        <div className="text-center list-container">
          <h1 className="text-center font-weight-bold font-italic mt-5 px-5">
            {poemTitle}
          </h1>
          <p className="text-center font-weight-bold mb-4">
            By:{' '}
            <Link to={`/poetry-api/author/${authorName}`}>{authorName}</Link>
          </p>
          <ul className="mb-3">
            {poem
              ? poem.lines.map((line, i) => {
                  return <li key={i}>{line}</li>;
                })
              : null}
          </ul>
        </div>
        <Flower />
      </div>
    );
  }
}

export default SinglePoem;
