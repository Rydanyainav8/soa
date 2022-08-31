import React, { Component } from 'react'
import Navbar from '../Navbar'
import Chambre from './chambre/Chambre'

export default class Client extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <Chambre/>
            </div>
        )
    }
}
