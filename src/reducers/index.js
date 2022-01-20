import { FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from './../actions';

const initialState = {
  city: {
    city: '',
    region: '',
    timezone_name: ''
  },
  isFetching: false,
  error: ''
};

export const reducer = (state = initialState, action) => {
  switch(action.type){
    case FETCH_START:
      return {
        ...state,
        city: {},
        isFetching: true,
        error: ''
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        city: action.payload,
        isFetching: false,
        error: ''
      };
    case FETCH_FAIL:
      return {
        ...state,
        quote:{},
        isFetching: false,
        error: action.payload
      };
  default:
    return state;
  }
};