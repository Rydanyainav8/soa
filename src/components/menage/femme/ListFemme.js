import React, { Component } from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ListFemme extends Component {
  render() {
    return (
      <div className="tabla">
        <h4>Liste des femmes de ménages</h4>
        <div className="flex1 overflo">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="">Nom</th>
                <th scope="">Prenoms</th>
                <th scope="">Numero telephone</th>
                <th scope=""></th>
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
