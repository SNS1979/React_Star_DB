import ListDetalis from "../../list-detalis/list-detalis"
import SwapiService from "../../../serveices/swapi-service"
import { Component } from "react";

export default class Planets extends Component {
    swapi = new SwapiService();

    listPlanetContent = (item) => {
        return (
            <div>
                <img src={item.srcImg} width={40} height={40} alt=""></img>
                {`  ${item.name} - ${item.population} population`}
            </div>
        )
    }

    render() {
        return (
            <div >
                <ListDetalis
                    getDataListItem={this.swapi.getAllPlanets}
                    getDataSelectItem={this.swapi.getPlanet}   
                    maxElement = {9} 
                    firstElement = {1}
                    content={this.listPlanetContent}
                />
            </div>
        )
    }
}


