import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SinglePoem extends Component {
  componentDidMount() {}
  render() {
    const { authorName, poemTitle } = this.props.match.params;
    console.log(this.props.location.string);
    const { poem } = this.props.location.state;
    return (
      <div>
        <h1>{poemTitle}</h1>
        <h2>
          By: <Link to={`/author/${authorName}`}>{authorName}</Link>
        </h2>
        <ul>
          {poem
            ? poem.lines.map((line, i) => {
                return <li key={i}>{line}</li>;
              })
            : null}
        </ul>
      </div>
    );
  }
}

export default SinglePoem;
