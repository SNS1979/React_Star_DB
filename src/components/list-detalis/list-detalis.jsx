import React, { Component } from "react";
import './list-detalis.css';
import ItemList from "../item-list/item-list";
import PersonDetails from "../person-detalis/person-details";
import SwapiService from "../../serveices/swapi-service";


export default class ListDetalis extends Component{
    swapi = new SwapiService()

    state = {
        idSelectItem: null,
    }

    onClickItemList = (idItem) => {
        this.setState({...this.state, idSelectItem:idItem})
    }

    onChangeSelected(id){
        
    }

    componentDidMount(){
        this.props.getDataListItem()
            .then((data) => {
                this.setState({
                    ...this.state, idSelectItem: data[0].id
                });
            })
    }

   
    render(){
        var { 
                content, 
                getDataListItem, 
                getDataSelectItem 
            } = this.props;

        return(
            <div className="star-db-panel2">
                    <div className="star-db-panel2-panel1">
                        <ItemList
                            onItemSelected = {this.onClickItemList}
                            onChangeItemSelected = {this.onChangeSelected}
                            getData = {getDataListItem}
                            content = {content}
                        />
                    </div>
                    <div className="star-db-panel2-panel2">
                        <PersonDetails 
                            idPerson = {this.state.idSelectItem} 
                            getData = {getDataSelectItem}
                            maxElement = {this.props.maxElement}
                            firstElement = {this.props.firstElement}
                        > 
                        </PersonDetails>
                    </div>
            </div>
        )
    }
}