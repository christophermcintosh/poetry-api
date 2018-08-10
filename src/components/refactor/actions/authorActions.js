import constants from '../constants';
import { getAuthors } from '../utils/authors';

export const authorAction = authors => {
  return {
    type: constants.FETCH_AUTHORS,
    authors
  };
};

export default {
  fetchAuthors: () => async dispatch => {
    const response = await getAuthors();
    console.log(response);
    dispatch(authorAction(response));
  }
};
