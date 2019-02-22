import * as actionTypes from './actionTypes'
import axios from 'axios'

export const getData = ( name ) => {
    return {
        type: actionTypes.GET_DATA
    };
};

export const consumer = (lat, lon) => {
    return dispatch => {
        axios.get('http://localhost:8000/?lat=' + lat + '&lon=' + lon)
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
