import * as actionTypes from './actionTypes'
import axios from 'axios'

export const getData = ( name ) => {
    return {
        type: actionTypes.GET_DATA
    };
};

export const consumer = (lat, lon) => {
    return dispatch => {
        axios.get('https://api.darksky.net/forecast/fd426e7cd961bafdb8c00cb8e06084bd/' + lat + ',' + lon, {
            headers: {"Access-Control-Allow-Origin": "*"}})
            .then( response => {
                console.log(response.data)
               //dispatch(setIngredients(response.data));
            } )
            .catch( error => {
                console.log(error)                
                //dispatch(fetchIngredientsFailed());
            } );
    };
}
