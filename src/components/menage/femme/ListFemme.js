import React, { Component } from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ListFemme extends Component {
  render() {
    return (
      <div>
        <h4>Liste des femmes de ménages</h4>
        <div className="flex1">
          <table className="table ajust460">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Nom</th>
                <th scope="col">Prenoms</th>
                <th scope="col">Numero telephone</th>

                <th scope="col"></th>
              </tr>
            </thead>

            <tbody>
              {this.props.femmes.map((femme, index) => (
                <tr>
                  <td>{femme.name}</td>
                  <td>{femme.firstname}</td>
                  <td>{femme.tel}</td>

                  <td>
                    <span title="Suprimer" onClick={this.props.deleteFemme.bind(this, index)}>
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
