import React, { Component } from "react";

export default class FormChambre extends Component {
  // constructor(props){
  //     super(props)

  // }

  render() {
    return (
      <div>
        <div className="flex1">
          <h4 className="center">Sauvegarde chambre</h4>

          <form>
            <div className="col-md-5">
              <label>Porte</label>
              <input
                className="form-control"
                onChange={this.props.handleChangeChambre}
                value={this.props.porte}
                type="text"
                name="porte"
                placeholder="Numero de porte..."
              />
            </div>

            <div className="col-md-5">
              <label>Etat</label>
              <select
                name="etat"
                value={this.props.etat}
                onChange={this.props.handleChangeChambre}
              >
                <option value={1}>Nettoyée</option>
                <option value={0}>Non nettoyée</option>
              </select>
            </div>

            <div className="col-md-5">
              <label>Catégorie</label>
              <select
                name="categorieId"
                value={this.props.categorieId}
                onChange={this.props.handleChangeChambre}
              >
                <option value={1}>Standard</option>
                <option value={2}>Suite senior</option>
                <option value={3}>Suite prestige</option>
              </select>
            </div>

            <div className="btnflx">
              <button
                className="btn shadow-1 rounded-1 blue"
                onClick={this.props.submitChambre}
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
