import constants from '../constants';

const authors = [];

export default (state = authors, action) => {
  switch (action.type) {
    case constants.FETCH_AUTHORS:
      return action.authors;
    default:
      return state;
  }
};
