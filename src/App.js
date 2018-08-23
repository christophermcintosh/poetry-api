import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import {
  Header,
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
      initialLoad: true,
      left: false
    };
  }
  componentDidMount() {
    this.props.fetchAuthors().then(() => {
      this.setState({
        initialLoad: false
      });
    });
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    const { authors } = this.props;
    const { initialLoad } = this.state;

    return (
      <div className="App container-fluid">
        <Header toggleDrawer={this.toggleDrawer} />

        <div className="row">
          <Drawer
            open={this.state.left}
            onClose={this.toggleDrawer('left', false)}
          >
            <div tabIndex={0} role="button">
              <Authors
                listOfAuthors={authors}
                initialLoad={initialLoad}
                toggleDrawer={this.toggleDrawer}
              />
            </div>
          </Drawer>
          <div className="col-12">
            <Switch>
              <Route
                path="/poetry-api/author/:authorName/:poemTitle"
                component={SinglePoem}
              />
              <Route
                path="/poetry-api/author/:authorName"
                component={SingleAuthor}
              />
              <Route exact path="/poetry-api" component={LandingPage} />
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
