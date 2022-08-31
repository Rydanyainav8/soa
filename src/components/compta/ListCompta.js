import React, { Component } from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ListCompta extends Component {
  render() {
    return (
      <div>
        <div className="flex1">
          <h4>Liste des produits en stock</h4>

          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Réference</th>
                <th scope="col">Libellé</th>
                <th scope="col">Quantité en stock</th>

                <th scope="col"></th>
              </tr>
            </thead>

            <tbody>
              {this.props.produits.map((produit, index) => (
                <tr>
                  <td>{produit.refe}</td>
                  <td>{produit.libelle}</td>
                  <td>{produit.qte}</td>

                  <td>
                    <span title="Suprimer" onClick={this.props.deleteProduit.bind(this, index)}>
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
