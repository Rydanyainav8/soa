import React, { Component } from "react";

export default class FormNettoyage extends Component {
  // constructor(props){
  //     super(props)

  // }

  render() {
    return (
      <div className="ajust400x">
        <div className="flex1">
          <h4 className="center">Checking de nettoyage</h4>

          <form>
            <div className="col-md-5">
              <label>Femme de ménage responsable</label>
              <select
                name="femmeId"
                value={this.props.femmeId}
                onChange={this.props.handleChangeNettoyage}
              >
                {this.props.femmes.map((femme) => (
                  <option value={femme.id}>{femme.firstname}</option>
                ))}
              </select>
            </div>

            <div className="col-md-5">
              <label>Numero de chambre</label>
              <select
                name="chambreId"
                value={this.props.chambreId}
                onChange={this.props.handleChangeNettoyage}
              >
                {this.props.chambres.map((chambre) => (
                  <option value={chambre.id}>{chambre.porte}</option>
                ))}
              </select>
            </div>

            <div className="col-md-5">
              <label>Date du nettoyage</label>
              <input
                className="form-control"
                onChange={this.props.handleChangeNettoyage}
                value={this.props.date_nettoyage}
                type="date"
                name="date_nettoyage"
              />
            </div>

            <div className="col-md-5">
              <label>Durée</label>
              <input
                className="form-control"
                onChange={this.props.handleChangeNettoyage}
                value={this.props.name}
                type="text"
                name="duree"
                placeholder="Durée du nettoyage..."
              />
            </div>

            <div className="btnflx">
              <button
                className="btn shadow-1 rounded-1 blue"
                onClick={this.props.submitNettoyage}
              >
                Valider
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
