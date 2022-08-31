import React, { Component } from 'react'
import Navbar from '../Navbar'
import Femme from './femme/Femme'


export default class Menage extends Component {
  render() {
    return (<div>
        <Navbar/>
        <Femme/>
    </div>)
  }
}
