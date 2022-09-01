
import React, { Component } from "react";

export default class FormReception extends Component {
  // constructor(props){
  //     super(props)

  // }

  render() {
    return (
      <div className="ln">
          <div className="flex1">
            <h4 className="center">Création d'une facture</h4>
            <form>
              <div className="col-md-5">
                <label>Numero</label>
                <input
                  className="form-control rounded-1"
                  onChange={this.props.handleChangeFacture}
                  value={this.props.numeroFacture}
                  type="text"
                  name="numeroFacture"
                  placeholder="Numero de facture..."
                />
              </div>

              <div className="col-md-5">
                <label>Nom du client</label>
                <input
                  className="form-control rounded-1"
                  onChange={this.props.handleChangeFacture}
                  value={this.props.nomClient}
                  type="text"
                  name="nomClient"
                  placeholder="Nom du client..."
                />
              </div>

              <div className="col-md-5">
                <label>Date d'édition</label>
                <input
                  className="form-control rounded-1"
                  onChange={this.props.handleChangeFacture}
                  value={this.props.date_facture}
                  type="date"
                  name="date_facture"
                />
              </div>

              <div className="col-md-5">
                <label>Montant total</label>
                <input
                  className="form-control rounded-1"
                  onChange={this.props.handleChangeFacture}
                  value={this.props.montant_total}
                  type="number"
                  name="montant_total"
                />
              </div>

              <div className="btnflx">
                <button
                  className="btn shadow-1 rounded-1 blue"
                  onClick={this.props.submitFacture}
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
