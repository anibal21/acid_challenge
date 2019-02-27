import React, { Component } from 'react'
import {Map, GoogleApiWrapper, Marker} from 'google-maps-react';
import Modal from '../../components/Modal/modal'
import Aux from '../../hoc/Aux/Aux'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/data';

const style = {
    width: '100%',
    height: '500px'
}

export class MapContainer extends Component {

    constructor(props) {
        super(props)
    
        this.toggleModal = this.toggleModal.bind(this)
    }

    state = {
        fields : {},
        modal : false
    }
    
    getcurrentLocation() {
        if (navigator && navigator.geolocation) {
            return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(pos => {
                const coords = pos.coords;
                resolve({
                    lat: coords.latitude,
                    lng: coords.longitude
                });
            });
            });
        }
        return {
            lat: 0,
            lng: 0
        };
    }

    addMarker = (location, map) => {

        const lat = location.lat()
        const lon = location.lng()        

        this.setState(prev => ({
            fields: {
            ...prev.fields,
            location : location,
            lat: lat,
            lon : lon
            },
            modal: true
        }));

        this.props.onConsume( lat, lon)

    };

    toggleModal(){        
        const modalState = this.state.modal ? false : true

        this.setState(prev => ({
            fields: {
            ...prev.fields
            },   
            modal: modalState
        }))
    }


    render() { 
        const marker = this.state.fields.hasOwnProperty('location') ? <Marker position={this.state.fields.location} /> : null

        return (
            <Aux>
                <Map 
                    google={this.props.google} 
                    zoom={1}
                    maxZoom={1}
                    style={style}
                    initialCenter={{
                        lat: 0,
                        lng: 0
                    }}
                    scrollwheel={false}
                    scaleControl={false}
                    navigationControl={false}
                    zoomControl={false}
                    onClick={(t, map, c) => this.addMarker(c.latLng, map)}
                >
                    {marker}
                </Map>
                <Modal 
                    modal={this.state.modal} 
                    handler={this.toggleModal} 
                    lat={this.state.fields.lat} 
                    lon={this.state.fields.lon} 
                    temp = {this.props.temp}
                    timezone = {this.props.timezone}
                    time = {this.props.time}
                />
            </Aux>
        );
  }
}

const mapStateToProps = state => {
    return {
        temp: state.temperature,
        timezone: state.timezone,
        time: state.time
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onConsume: (lat, lon) => dispatch(actions.consumer(lat, lon))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoogleApiWrapper({apiKey: 'AIzaSyB7du2kE6luzNHRyrr0X0__9DJCk-uugW0'})(MapContainer))