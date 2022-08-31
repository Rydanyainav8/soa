import React, { Component } from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ListChambre extends Component {
  getCategorieChambre = (categorieId) => {
    if (categorieId == 1) {
      return "Standard";
    } else {
      if (categorieId == 2) {
        return "Suite senior";
      } else {
        return "Suite prestige";
      }
    }
  };

  render() {
    return (
      <div>
        <h4>Liste des chambres enregistrées</h4>

        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Numero de porte</th>
              <th scope="col">Catégorie</th>
              <th scope="col">Etat</th>

              <th scope="col"></th>
            </tr>
          </thead>

          <tbody>
            {this.props.chambres.map((chambre, index) => (
              <tr>
                <td>{chambre.porte}</td>
                <td>{this.getCategorieChambre(chambre.categorieId)}</td>
                <td>{chambre.etat ? "Nettoyée" : "Non nettoyée"}</td>

                <td>
                  <span
                    title="Suprimer"
                    onClick={this.props.deleteChambre.bind(this, index)}
                  >
                    <FontAwesomeIcon icon={faTrashCan} />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
