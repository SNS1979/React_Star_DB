import ListDetalis from "../../list-detalis/list-detalis"
import SwapiService from "../../../serveices/swapi-service"
import { Component } from "react";

export default class Ships extends Component {
    swapi = new SwapiService();

    listPeopleContent = (item) => {
        return (
            <div>
                <img src={item.srcImg} width={40} height={40} alt=""></img>
                {`  ${item.name} - ${item.starship_class}`}
            </div>
        )
    }

    render() {
        return (
            <div >
                <ListDetalis
                    getDataListItem={this.swapi.getAllStarships}
                    getDataSelectItem={this.swapi.getStarship}   
                    firstElement = {1} 
                    maxElement = {13}
                    content={this.listPeopleContent}
                />
            </div>
        )
    }
}


