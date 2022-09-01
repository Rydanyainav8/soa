import React, { Component } from "react";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class ListReservation extends Component {
  // constructor(props){
  //     super(props)

  // }
  render() {
    return (
      <div className="tabla">
        <h4>Liste des réservations effectuées</h4>
        <div className="overflo">
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Date début du séjour</th>
                <th scope="col">Date fin du séjour</th>
                <th scope="col">Nom</th>
                <th scope="col">Prenoms</th>
                <th scope="col">Numero CIN</th>
                <th scope="col">Numero de la chambre</th>

                <th scope="col"></th>
              </tr>
            </thead>

            <tbody>
              {this.props.reservations.map((reservation, index) => (
                <tr>
                  <td>{reservation.start_date}</td>
                  <td>{reservation.end_date}</td>
                  <td>{reservation.name}</td>
                  <td>{reservation.firstname}</td>
                  <td>{reservation.numeroCin}</td>
                  <td>{reservation.chambreId}</td>

                  <td>
                    <span
                      title="Suprimer"
                      onClick={this.props.deleteReservation.bind(this, index)}
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
