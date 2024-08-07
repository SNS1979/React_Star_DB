import React, {Component} from "react";
import './header.css'
import { Link } from "react-router-dom";

export default class Header extends Component {

    render(){
        return (
            <div className="header d-flex">
                <h3>
                    <a href="/">Star DB</a>
                </h3>
                <ul className="d-flex">
                    <li><Link to="/peoples">People</Link></li>
                    <li><Link to="/planets">Planets</Link></li>
                    <li><Link to="/starships">Starships</Link></li>
                </ul>
                
            </div>
        )
    }
}