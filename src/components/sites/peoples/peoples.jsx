import ListDetalis from "../../list-detalis/list-detalis"
import SwapiService from "../../../serveices/swapi-service"
import { Component } from "react";

export default class Peoples extends Component {
    swapi = new SwapiService();

    listPeopleContent = (item) => {
        return (
            <div>
                <img src={item.srcImg} width={30} height={40} alt=""></img>
                {`  ${item.name} - ${item.mass} kg`}
            </div>
        )
    }



    render() {
        return (
            <div >
                <ListDetalis
                    getDataListItem={this.swapi.getAllPeople}
                    getDataSelectItem={this.swapi.getPerson}
                    content={this.listPeopleContent}
                    maxElement = {8}
                    //firstElement = {1}
                />
            </div>

            
        )
    }
}


