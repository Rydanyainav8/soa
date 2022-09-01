import React, { Component } from "react";
import FormNettoyage from "./FormNettoyage";
import ListNettoyage from "./ListNettoyage";

export default class Nettoyage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nettoyages: [],
      date_nettoyage: "",
      duree: 0,
      chambreId: 1,
      femmeId: 1,
      chambres: [
        {
          id: 1,
          porte: 101,
          etat: 1,
          categorieId: 1,
        },
        {
          id: 2,
          porte: 201,
          etat: 1,
          categorieId: 1,
        },
        {
          id: 3,
          porte: 301,
          etat: 1,
          categorieId: 3,
        },
      ],
    };
  }

  handleChangeNettoyage(e) {
    this.setState({
      [e.target.name]: [e.target.value],
    });
  }

  submitNettoyage(e) {
    e.preventDefault();

    this.setState(
      {
        nettoyages: this.state.nettoyages.concat({
          id: this.state.nettoyages.length,
          date_nettoyage: this.state.date_nettoyage.toString(),
          duree: this.state.duree.toString(),
          chambreId: parseInt(this.state.chambreId),
          femmeId: parseInt(this.state.femmeId),
        }),
        date_nettoyage: "",
        duree: "",
      },
      function () {
        console.log(this.state.nettoyages);
      }
    );
  }

  deleteNettoyage(id) {
    let nettoyages__ = this.state.nettoyages;

    nettoyages__.splice(id, 1);
    this.setState({
      nettoyages: nettoyages__,
    });
  }

  render() {
    return (
      <div>
        <div className="Grand tabla">
          <FormNettoyage
            date_nettoyage={this.state.date_nettoyage}
            duree={this.state.duree}
            chambres={this.state.chambres}
            femmes={this.props.femmes}
            handleChangeNettoyage={this.handleChangeNettoyage.bind(this)}
            submitNettoyage={this.submitNettoyage.bind(this)}
          />

          <ListNettoyage
            nettoyages={this.state.nettoyages}
            deleteNettoyage={this.deleteNettoyage.bind(this)}
          />
        </div>
      </div>
    );
  }
}
