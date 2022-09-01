import React, { Component } from "react";

export default class FormReservation extends Component {
  // constructor(props){
  //     super(props)

  // }

  render() {
    return (
      <div className="tabla ln">
        <div className="flex1">
          <h4 className="center">Faire votre réservation</h4>

          <form>
            <div className="col-md-5">
              <label>Nom</label>
              <input
                className="form-control rounded-1"
                onChange={this.props.update}
                value={this.props.name}
                type="text"
                name="name"
                placeholder="Votre nom..."
              />
            </div>

            <div className="col-md-5">
              <label>Prenoms</label>
              <input
                className="form-control rounded-1"
                onChange={this.props.update}
                value={this.props.firstname}
                type="text"
                name="firstname"
                placeholder="Vos prenoms..."
              />
            </div>

            <div className="col-md-5">
              <label>Numero de CIN</label>
              <input
                className="form-control rounded-1"
                onChange={this.props.update}
                value={this.props.numeroCin}
                type="text"
                name="numeroCin"
                placeholder="Votre numero CIN..."
              />
            </div>

            <div className="col-md-5">
              <label>Chambre à réserver</label>
              <select className="form-control rounded-1"
                name="chambreId"
                value={this.props.chambreId}
                onChange={this.props.update}
              >
                {this.props.chambres.map((chambre) => (
                  <option value={chambre.id}>{chambre.porte}</option>
                ))}
              </select>
            </div>

            <div className="col-md-5">
              <label>Debut séjour</label>
              <input
                className="form-control rounded-1"
                onChange={this.props.update}
                value={this.props.start_date}
                type="date"
                name="start_date"
              />
            </div>

            <div className="col-md-5">
              <label>Fin séjour</label>
              <input
                className="form-control rounded-1"
                onChange={this.props.update}
                value={this.props.end_date}
                type="date"
                name="end_date"
              />
            </div>

            <div className="btnflx">
              <button
                className="btn shadow-1 rounded-1 blue"
                onClick={this.props.handleClick}
              >
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
