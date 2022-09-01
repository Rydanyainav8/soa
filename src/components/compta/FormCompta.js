import React, { Component } from "react";

export default class FormCompta extends Component {
  // constructor(props){
  //     super(props)

  // }

  render() {
    return (
      <div className="ln">
        <div className="flex1">
          <h4 className="center">Ajouter un produit</h4>

          <form>
            <div className="col-md-5">
              <label>Réference</label>
              <input
                className="form-control"
                onChange={this.props.handleChangeCompta}
                value={this.props.refe}
                type="text"
                name="refe"
                placeholder="Référence du produit..."
              />
            </div>

            <div className="col-md-5">
              <label>Libellé</label>
              <input
                className="form-control"
                onChange={this.props.handleChangeCompta}
                value={this.props.libelle}
                type="text"
                name="libelle"
                placeholder="Libellé du produit..."
              />
            </div>

            <div className="col-md-5">
              <label>Quantité</label>
              <input
                className="form-control"
                onChange={this.props.handleChangeCompta}
                value={this.props.qte}
                type="number"
                name="qte"
              />
            </div>

            <div className="btnflx">
              <button
                className="btn shadow-1 rounded-1 blue"
                onClick={this.props.submitProduit}
              >
                Stocker
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
