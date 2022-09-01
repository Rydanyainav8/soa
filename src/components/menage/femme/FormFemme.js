import React, { Component } from "react";

export default class FormFemme extends Component {
  // constructor(props){
  //     super(props)

  // }

  render() {
    return (
      <div className="tabla ln">
        <div className="flex1">
          <h4 className="center">Enregistrement femme de ménage</h4>

          <form>
            <div className="">
              <label>Nom</label>
              <input
                className="form-control rounded-1"
                onChange={this.props.handleChangeFemme}
                value={this.props.name}
                type="text"
                name="name"
                placeholder="Votre nom..."
              />
            </div>

            <div className="">
              <label>Prenoms</label>
              <input
                className="form-control rounded-1"
                onChange={this.props.handleChangeFemme}
                value={this.props.firstname}
                type="text"
                name="firstname"
                placeholder="Vos prenoms..."
              />
            </div>

            <div className="">
              <label>Numero telephone</label>
              <input
                className="form-control rounded-1"
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
