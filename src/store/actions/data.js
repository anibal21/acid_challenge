import * as actionTypes from './actionTypes'
import axios from 'axios'

export const getData = ( data ) => {
    return {
        type: actionTypes.GET_DATA,
        json : data
    };
};

export const consumer = (lat, lon) => {
    return dispatch => {
            axios.get('http://18.191.132.169:8000/api?lat=' + lat + '&lon=' + lon)
                .then( response => {
                    console.log(response.data)
                dispatch(getData(response.data));
                } )
                .catch( error => {
                    console.log(error)                
                } );
    };
}
