import React, { Component } from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ListNettoyage extends Component {
  render() {
    return (
      <div className="tabla ln">
          <h4>Liste des checking nettoyage</h4>
        <div className="flex1 overflo">

          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Femme de ménage</th>
                <th scope="col">Numero de chambre</th>
                <th scope="col">Date</th>
                <th scope="col">Durée</th>

                <th scope="col"></th>
              </tr>
            </thead>

            <tbody>
              {this.props.nettoyages.map((nettoyage, index) => (
                <tr>
                  <td>{nettoyage.femmeId}</td>
                  <td>{nettoyage.chambreId}</td>
                  <td>{nettoyage.date_nettoyage}</td>
                  <td>{nettoyage.duree}</td>

                  <td>
                    <span title="Suprimer" onClick={this.props.deleteNettoyage.bind(this, index)}>
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
