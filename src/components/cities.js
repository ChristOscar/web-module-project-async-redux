import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCity } from '../actions';

const Cities = ({ city, isFetching, error, dispatch }) => {
    
    useEffect(() => {
        dispatch(getCity());
    }, []);

    if (error) {
        return <h2>We got an error: {error}</h2>;
      }
    
    if (isFetching) {
        return <h2>Getting a City! Please Wait...</h2>;
    }

    const handleClick= () => {
        dispatch(getCity());
    }

    return( 
        <div>
            <div>
                <h3>{city.city}</h3>
                <h5>Song: {city.region}</h5>
                <h5>Album: {city.timezone_name}</h5>
            </div>
            <button onClick={handleClick}>Get New City</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state, 'state')
    return {
      quote: state.city,
      isFetching: state.isFetching,
      error: state.error
    };
  };

export default connect(mapStateToProps)(Cities);