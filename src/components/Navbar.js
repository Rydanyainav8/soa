import React from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navigation containera">
          <ul className="maxwidth">
              <NavLink to="/">
                <li className="navli">Accueil</li>
              </NavLink>

              <NavLink to="/client">
                <li className="navli">Service clientèle</li>
              </NavLink>

              <NavLink to="/reception">
                <li className="navli">Service de reception</li>
              </NavLink>

              <NavLink to="/menage">
                <li className="navli">Service de ménage</li>
              </NavLink>

              <NavLink to="/compta">
                <li className="navli">Service de comptabilité</li>
              </NavLink>
          </ul>
        </nav>
      </div>
    );
  }
}
