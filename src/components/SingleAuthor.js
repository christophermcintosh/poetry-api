import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from './Loader';
import { fetchAuthor, requestData, receiveData } from './store';

class SingleAuthor extends Component {
  componentDidMount() {
    const { authorName } = this.props.match.params;

    this.onRender(authorName);
  }

  componentWillReceiveProps(nextProps) {
    const { authorName } = this.props.match.params;
    const nextAuthorName = nextProps.match.params.authorName;

    if (authorName !== nextAuthorName) {
      this.onRender(nextAuthorName);
    }
  }

  onRender = author => {
    window.scrollTo(0, 0);
    this.props.requestData();
    this.props.fetchAuthor(author).then(() => {
      this.props.receiveData();
    });
  };

  render() {
    const { authorName } = this.props.match.params;
    const { author, isFetching } = this.props;

    if (isFetching) return <Loader size="120px" />;
    return (
      <div className="list-container">
        <h1 className="text-center font-weight-bold my-5">{authorName}</h1>
        <ul className="mb-5">
          {author.length
            ? author.map((auth, i) => {
                return (
                  <li key={i}>
                    <Link
                      to={{
                        pathname: `/poetry-api/author/${auth.author}/${
                          auth.title
                        }`,
                        state: {
                          poem: auth
                        }
                      }}
                    >
                      <span className="font-weight-bold px-2 list-numbers">
                        {i + 1}.
                      </span>{' '}
                      {auth.title}
                    </Link>
                    <hr />
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
    author: state.authors.author,
    isFetching: state.isFetching
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAuthor: authorName => dispatch(fetchAuthor(authorName)),
  requestData: () => dispatch(requestData()),
  receiveData: () => dispatch(receiveData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleAuthor);
