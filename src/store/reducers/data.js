import * as actionsTypes from '../actions/actionTypes'

const initialState = {
    lat: null,
    lon: null,
    temperature : null,
    station : null,
    continent: null,
    city: null,
    loaded: false,
    error: null,
    requestNumber: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionsTypes.GET_DATA:
            return {
                ...state,
                lat: state.lat,
                lon: state.lon,
                temperature : state.temperature,
                station : state.station,
                continent: state.continent,
                city: state.city,
                loaded: state.loaded,
                error: state.error,
                requestNumber: state.requestNumber                
            }
        default:
            return state                    
    }
}

export default reducer