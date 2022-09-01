import React, { Component } from "react";
// import Navbar from '../../Navbar'
// import Chambre from '../chambre/Chambre'
import FormReservation from "./FormReservation";
import ListReservation from "./ListReservation";

export default class Reservation extends Component {
  constructor(props) {
    super(props);
    console.log(props.chambres);

    this.state = {
      reservations: [],
      boolData: false,

      name: "",
      firstname: "",
      numeroCin: "",
      start_date: "",
      end_date: "",
      chambreId: 1,
    };
  }

  update(e) {
    this.setState({
      [e.target.name]: [e.target.value],
    });
  }

  handleClick(e) {
    e.preventDefault();

    this.setState(
      {
        reservations: this.state.reservations.concat({
          id: this.state.reservations.length,
          name: this.state.name.toString(),
          firstname: this.state.firstname.toString(),
          numeroCin: this.state.numeroCin.toString(),
          chambreId: parseInt(this.state.chambreId),
          start_date: this.state.start_date.toString(),
          end_date: this.state.end_date.toString(),
        }),
        name: "",
        firstname: "",
        numeroCin: "",
      },
      function () {
        console.log(this.state.reservations);
      }
    );
  }

  deleteReservation(id) {
    let reservations__ = this.state.reservations;

    reservations__.splice(id, 1);
    this.setState({
      reservations: reservations__,
    });
  }

  render() {
    return (
      <div>
        <div className="Grand">
          <FormReservation
            name={this.state.name}
            firstname={this.state.firstname}
            numeroCin={this.state.numeroCin}
            chambres={this.props.chambres}
            start_date={this.state.start_date}
            end_date={this.state.end_date}
            chambreId={this.state.chambreId}
            update={this.update.bind(this)}
            handleClick={this.handleClick.bind(this)}
          />
          <hr />
          <ListReservation
            reservations={this.state.reservations}
            deleteReservation={this.deleteReservation.bind(this)}
          />
        </div>
      </div>
    );
  }
}
