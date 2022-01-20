import axios from 'axios';

export const FETCH_START = "FETCH-START";
export const FETCH_FAIL = "FETCH-FAIL";
export const FETCH_SUCCESS = "FETCH-SUCCESS";

export const getCity = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios.get('http://ipwhois.app/json/8.8.4.4')
      .then(resp => {
        dispatch(fetchSuccess(resp.data));
        console.log(resp);
      })
      .catch(err => {
        dispatch(fetchFail(err));
      })
  }
}

export const fetchStart = () => {
  return({type:FETCH_START});
}

export const fetchSuccess = (city) => {
  return({type:FETCH_SUCCESS, payload: quote});
}

export const fetchFail = (errorMessage) => {
  return({type:FETCH_FAIL, payload: errorMessage});
}