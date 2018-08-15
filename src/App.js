import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  Header,
  AllAuthors,
  SingleAuthor,
  SinglePoem,
  LandingPage,
  NotFound,
  Authors
} from './components';
import { fetchAuthors, requestData, receiveData } from './components/store';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      initialLoad: true
    };
  }
  componentDidMount() {
    this.props.fetchAuthors().then(() => {
      this.setState({
        initialLoad: false
      });
    });
  }
  render() {
    const { authors, isFetching } = this.props;
    const { initialLoad } = this.state;

    return (
      <div className="App container-fluid">
        <Header />
        <div className="row">
          <div className="col-2">
            <Authors listOfAuthors={authors} initialLoad={initialLoad} />
          </div>
          <div className="col-10">
            <Switch>
              <Route
                path="/author/:authorName/:poemTitle"
                component={SinglePoem}
              />
              <Route path="/author/:authorName" component={SingleAuthor} />
              <Route exact path="/" component={LandingPage} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authors: state.authors,
    isFetching: state.isFetching
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAuthors: () => dispatch(fetchAuthors()),
  requestData: () => dispatch(requestData()),
  receiveData: () => dispatch(receiveData())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

// export default App;
