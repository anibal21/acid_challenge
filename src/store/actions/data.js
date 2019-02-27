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

        var location = window.location.hostname

        axios.get('http://' + location + ':8000/api?lat=' + lat + '&lon=' + lon)
            .then( response => {
                console.log(response.data)
            dispatch(getData(response.data));
            } )
            .catch( error => {
                console.log(error)                
            } );
    };
}
