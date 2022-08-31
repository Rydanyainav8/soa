import React, { Component } from "react";
import Nettoyage from "../nettoyage/Nettoyage";
import FormFemme from "./FormFemme";
import ListFemme from "./ListFemme";

export default class Femme extends Component {
  constructor(props) {
    super(props);

    this.state = {
      femmes: [],
      name: "",
      firstname: "",
      tel: "",
    };
  }

  handleChangeFemme(e) {
    this.setState({
      [e.target.name]: [e.target.value],
    });
  }

  submitFemme(e) {
    e.preventDefault();

    this.setState(
      {
        femmes: this.state.femmes.concat({
          id: this.state.femmes.length,
          name: this.state.name.toString(),
          firstname: this.state.firstname.toString(),
          tel: this.state.numero.toString(),
        }),
        name: "",
        firstname: "",
        tel: "",
      },
      function () {
        console.log(this.state.femmes);
      }
    );
  }

  deleteFemme(id) {
    let femmes__ = this.state.femmes;

    femmes__.splice(id, 1);
    this.setState({
      femmes: femmes__,
    });
  }

  render() {
    return (
      <div>
        <div className="Grand centre">
          <FormFemme
            name={this.state.name}
            firstname={this.state.firstname}
            tel={this.state.tel}
            handleChangeFemme={this.handleChangeFemme.bind(this)}
            submitFemme={this.submitFemme.bind(this)}
            />
          <ListFemme
            femmes={this.state.femmes}
            deleteFemme={this.deleteFemme.bind(this)}
          />
        </div>

        <Nettoyage femmes={this.state.femmes} />
      </div>
    );
  }
}
