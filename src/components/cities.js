import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const Cities = ({ city, isFetching, error, dispatch }) => {
    
    axios.get('http://ipwhois.app/json/8.8.4.4')
    .then(resp => {
        
        console.log(resp);
    })
    .catch(err=>{
        console.log('Found and Error')
    })
    
    return(
        <div>
            <p>AHHHHH THis is Cities</p>
        </div>
    )
}

export default Cities;