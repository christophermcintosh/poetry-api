const RECEIVE_DATA = 'RECEIVE_DATA';
const REQUEST_DATA = 'REQUEST_DATA';

export const requestData = response => {
  return {
    type: REQUEST_DATA,
    response
  };
};

export const receiveData = response => {
  return {
    type: RECEIVE_DATA,
    response
  };
};

export default function(state = false, action) {
  switch (action.type) {
    case REQUEST_DATA:
      return true;
    case RECEIVE_DATA:
      return false;

    default:
      return state;
  }
}
