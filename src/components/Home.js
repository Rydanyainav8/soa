import React, { Component } from 'react'
import Navbar from './Navbar'

export default class Home extends Component {
    render() {
        return (<div>
            <Navbar/>
            <div className='text'>Page d'accueil</div>
        </div>)
    }
}
