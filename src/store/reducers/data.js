import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    temperature : null,
    timezone: null,
    time: null
}

const getData = (state, action) => {
    return updateObject( state, {
        temperature: action.json.currently.temperature,
        timezone: action.json.timezone,
        time : action.json.currently.summary        
    } );

};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.GET_DATA: return getData(state, action);    
        default:
            return state                    
    }
}

export default reducer