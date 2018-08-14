import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAuthor } from './store';

class SingleAuthor extends Component {
  componentDidMount() {
    const { authorName } = this.props.match.params;
    this.props.fetchAuthor(authorName);
    this.onRender();
  }

  componentWillReceiveProps(nextProps) {
    const { authorName } = this.props.match.params;
    const newAuthorName = nextProps.match.params.authorName;

    if (authorName !== newAuthorName) {
      this.props.fetchAuthor(newAuthorName);
      this.onRender();
    }
  }

  onRender = () => {
    window.scrollTo(0, 0);
  };

  render() {
    const { authorName } = this.props.match.params;
    const { author } = this.props;

    if (!author) return null;
    return (
      <div>
        <h1>{authorName}</h1>
        <ul>
          {author.length
            ? author.map((auth, i) => {
                return (
                  <li key={i}>
                    <Link
                      to={{
                        pathname: `/author/${auth.author}/${auth.title}`,
                        state: {
                          poem: auth
                        }
                      }}
                    >
                      {auth.title}
                    </Link>
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    author: state.authors.author
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAuthor: authorName => dispatch(fetchAuthor(authorName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleAuthor);
