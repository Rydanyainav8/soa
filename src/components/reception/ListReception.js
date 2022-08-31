import React, { Component } from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ListReception extends Component {
  // constructor(props){
  //     super(props)

  // }
  render() {
    return (
      <div>
        <div className="flex1">
          <h4>Liste des factures enregistrées</h4>

          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Numero</th>
                <th scope="col">Nom du client</th>
                <th scope="col">Date d'edition</th>
                <th scope="col">Montant total</th>
                <th scope="col">Action</th>
                <th scope="col"></th>
              </tr>
            </thead>

            <tbody>
              {this.props.factures.map((facture, index) => (
                <tr>
                  <td>{facture.numeroFacture}</td>
                  <td>{facture.nomClient}</td>
                  <td>{facture.date_facture}</td>
                  <td>{facture.montant_total}</td>

                  <td>
                    <span title="Suprimer" onClick={this.props.deleteFacture.bind(this, index)}>
                      <FontAwesomeIcon icon={faTrashCan} />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
