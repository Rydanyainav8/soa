import React, { Component } from "react";
import Reservation from "../reservation/Reservation";
import FormChambre from "./FormChambre";
import ListChambre from "./ListChambre";

export default class Chambre extends Component {
  constructor(props) {
    super(props);

    this.state = {
      chambres: [],
      porte: "",
      etat: 1,
      categorieId: 1,
    };
  }

  handleChangeChambre(e) {
    this.setState({
      [e.target.name]: [e.target.value],
    });
  }

  submitChambre(e) {
    e.preventDefault();

    this.setState(
      {
        chambres: this.state.chambres.concat({
          id: this.state.chambres.length,
          porte: this.state.porte.toString(),
          categorieId: parseInt(this.state.categorieId),
          etat: parseInt(this.state.etat),
        }),
        porte: "",
      },
      function () {
        console.log(this.state.chambres);
      }
    );
  }

  deleteChambre(id) {
    let chambres__ = this.state.chambres;

    chambres__.splice(id, 1);
    this.setState({
      chambres: chambres__,
    });
  }

  render() {
    return (
      <div>
        <div className="Grand centre mg cont">
          <FormChambre
            categorieId={this.state.categorieId}
            porte={this.state.porte}
            etat={this.state.etat}
            submitChambre={this.submitChambre.bind(this)}
            handleChangeChambre={this.handleChangeChambre.bind(this)}
          />
          <ListChambre
            chambres={this.state.chambres}
            deleteChambre={this.deleteChambre.bind(this)}
          />
        </div>
        <Reservation chambres={this.state.chambres} />
      </div>
    );
  }
}
