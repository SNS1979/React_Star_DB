/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from "react";
import './person-details.css'
import SwapiService from '../../serveices/swapi-service'
import Loader from '../loader/loader'
import ItemListMenu from "../item-list-menu/item-list-menu";


export default class PersonDetails extends Component {

    swapi = new SwapiService();

    state = {
        person: {
            id: null,
            name: null,
            srcImg: null,
        },      
    }

    loading = false;
    idPerson = null;
   
    
    upDateState(idPerson){
        this.props.getData(idPerson)
                .then((data) => {
                    this.loading = false; 
                    this.setState({
                        person: {...data},
                    })  
                    
                })
    }


    render(){
        const {person} = this.state;

        if(this.props.idPerson !== this.idPerson){
            this.loading = true;
            this.idPerson = this.props.idPerson;

            this.upDateState(this.idPerson);
        }

        const spiner = this.loading ? <Loader/> : null;
        const content = (this.loading || this.idPerson === null) ? null : 
            <Content 
                dataList={person} 
                name = {person.name} 
                srcImg={person.srcImg}
                maxElem={this.props.maxElement}
                firstElem={this.props.firstElement}/>

        return(
            <div>
                {spiner}
                {content}
            </div>
       )
    }
}


const Content = ({dataList, name, srcImg, maxElem , firstElem }) => {

    return(
        <div className="d-flex bg-dark person-datails">
                <img  
                    width={100} 
                    height={100}                
                    alt-text="planet" 
                    src={srcImg}/>
                <div className="person-datails-data">
                    <h4>{name}</h4>
                    <ItemListMenu 
                        obj = {dataList}
                        firstElem = {firstElem}
                        maxElem = {maxElem}>
                    </ItemListMenu>        
                </div>
        </div>
    )
}