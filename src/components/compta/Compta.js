import React, { Component } from 'react'
import Navbar from '../Navbar'
import FormCompta from './FormCompta'
import ListCompta from './ListCompta'

export default class Compta extends Component {
    constructor(props){
        super(props)

        this.state = {
            produits: [],
            refe: "",
            libelle: "",
            qte: 0
        }
    }

    handleChangeCompta(e){
        this.setState({
            [e.target.name]: [e.target.value]
        })
    }

    submitProduit(e){
        e.preventDefault()

        this.setState(
            { produits: 
                this.state.produits.concat(
                    {
                        id: this.state.produits.length ,
                        refe: (this.state.refe).toString(),
                        libelle: (this.state.libelle).toString(),
                        qte: parseInt(this.state.qte)
                    }
                ),
                ref: "", 
                libelle: "", 
                qte: ""
                
            },
            function() {
             
                console.log(this.state.produits)
            } 
        )
    }

    deleteProduit(id){
        let produits__ = this.state.produits
    
        produits__.splice(id, 1)
        this.setState({
            produits: produits__
        });
    }

    render() {
        return (<div>
            <Navbar/>
            <div className="Grand centre mg cont">
            <FormCompta
                refe = { this.state.refe }
                libelle = { this.state.libelle }
                qte = { this.state.qte }
                handleChangeCompta = { this.handleChangeCompta.bind(this)}
                submitProduit = { this.submitProduit.bind(this) }

            />

            <hr/>
            <ListCompta
                produits = { this.state.produits }
                deleteProduit = { this.deleteProduit.bind(this) }
            />
            </div>
        </div>)
    }
}
