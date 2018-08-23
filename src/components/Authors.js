import React, { Component } from 'react';
import ListAuthors from './ListAuthors';
import Loader from './Loader';

class Authors extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      authors: [],
      filteredAuthors: [],
      searchActivated: false
    };
  }

  static getDerivedStateFromProps(nextProps, state) {
    if (nextProps.authors !== state.authors) {
      return {
        authors: nextProps.listOfAuthors.authors
      };
    }
    return null;
  }

  handleChange = async event => {
    await this.setState({ [event.target.name]: event.target.value });
    this.filterAuthors();
  };

  filterAuthors = () => {
    let filteredAuthors = this.state.authors;
    let { value } = this.state;

    filteredAuthors = filteredAuthors.filter(author => {
      return author.toLowerCase().indexOf(value.toLowerCase()) !== -1;
    });
    this.setState({
      filteredAuthors,
      searchActivated: true
    });
  };

  render() {
    const { filteredAuthors, authors, searchActivated } = this.state;
    const { initialLoad } = this.props;

    if (initialLoad) return <Loader size="50px" margin="20px" />;
    return (
      <div id="authors-menu">
        <div className="text-center py-3">
          <input
            type="text"
            name="value"
            placeholder="Search Poets"
            onChange={this.handleChange}
          />
        </div>
        {!searchActivated ? (
          <ListAuthors
            listOfAuthors={authors}
            toggleDrawer={this.props.toggleDrawer}
          />
        ) : (
          <ListAuthors
            listOfAuthors={filteredAuthors}
            toggleDrawer={this.props.toggleDrawer}
          />
        )}
      </div>
    );
  }
}

export default Authors;
