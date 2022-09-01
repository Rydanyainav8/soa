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
      <div className="tabla">
        <h4>Liste des chambres enregistrées</h4>
        <div className="flex1 overflo">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="">Numero de porte</th>
                <th scope="">Catégorie</th>
                <th scope="">Etat</th>
                <th scope=""></th>
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
      </div>
    );
  }
}
