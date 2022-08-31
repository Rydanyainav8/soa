import React, { Component } from "react";
import FormReception from "./FormReception";
import Navbar from ".././Navbar";
import ListReception from "./ListReception";

export default class Reception extends Component {
  constructor(props) {
    super(props);

    this.state = {
      factures: [],
      numeroFacture: "",
      date_facture: "",
      nomClient: "",
      montant_total: "",
    };
  }

  handleChangeFacture(e) {
    this.setState({
      [e.target.name]: [e.target.value],
    });
  }

  submitFacture(e) {
    e.preventDefault();

    this.setState(
      {
        factures: this.state.factures.concat({
          id: this.state.factures.length,
          numeroFacture: this.state.numeroFacture.toString(),
          nomClient: this.state.nomClient.toString(),
          date_facture: this.state.date_facture.toString(),
          montant_total: parseInt(this.state.montant_total),
        }),
        numeroFacture: "",
        nomClient: "",
        montant_total: "",
      },
      function () {
        console.log(this.state.factures);
      }
    );
  }

  deleteFacture(id) {
    let factures__ = this.state.factures;

    factures__.splice(id, 1);
    this.setState({
      factures: factures__,
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="Grand centre mg cont">
          <FormReception
            numeroFacture={this.state.numeroFacture}
            date_facture={this.state.date_facture}
            nomClient={this.state.nomClient}
            montant_total={this.state.montant_total}
            handleChangeFacture={this.handleChangeFacture.bind(this)}
            submitFacture={this.submitFacture.bind(this)}
          />
          <ListReception
            factures={this.state.factures}
            deleteFacture={this.deleteFacture.bind(this)}
          />
        </div>
      </div>
    );
  }
}
