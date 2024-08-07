import React from "react";
import { Component } from "react";
import Header from "../header/header";
import RendomPlanet from "../rendom-planat/rendom-planet";
import "./app.css"
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Peoples from "../sites/peoples/peoples";
import Ships from "../sites/ships/ships";
import Planets from "../sites/planets/ships";



export default class App extends Component {




    render() {

        return (
            <BrowserRouter>
            <div className="star-db">
                <Header />
                <RendomPlanet />
                <Routes>
                    <Route path="/planets" Component={ Planets } />
                    <Route path="/starships" Component={ Ships } />
                    <Route path="/peoples" Component={ Peoples } />
                </Routes>
            </div>
            </BrowserRouter>
        )
    }
}