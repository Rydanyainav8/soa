import React, { Component } from "react";

export default class FormFemme extends Component {
  // constructor(props){
  //     super(props)

  // }

  render() {
    return (
      <div className="ajust460">
        <div className="flex1">
          <h4 className="center">Enregistrement femme de ménage</h4>

          <form>
            <div className="col-md-5">
              <label>Nom</label>
              <input
                className="form-control"
                onChange={this.props.handleChangeFemme}
                value={this.props.name}
                type="text"
                name="name"
                placeholder="Votre nom..."
              />
            </div>

            <div className="col-md-5">
              <label>Prenoms</label>
              <input
                className="form-control"
                onChange={this.props.handleChangeFemme}
                value={this.props.firstname}
                type="text"
                name="firstname"
                placeholder="Vos prenoms..."
              />
            </div>

            <div className="col-md-5">
              <label>Numero telephone</label>
              <input
                className="form-control"
                onChange={this.props.handleChangeFemme}
                value={this.props.numero}
                type="text"
                name="numero"
                placeholder="Votre numero telephone..."
              />
            </div>

            <div className="btnflx">
              <button
                className="btn shadow-1 rounded-1 blue"
                onClick={this.props.submitFemme}
              >
              Enregistrer
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
