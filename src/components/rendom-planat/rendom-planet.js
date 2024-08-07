/* eslint-disable jsx-a11y/alt-text */
import React, {Component} from "react";
import './rendom-planet.css'
import SwapiService from "../../serveices/swapi-service.js";
import '../loader/loader.jsx'
import Loader from "../loader/loader.jsx";
import ErrorIndication from "../error/error.jsx";

export default class RendomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false,
    }

    idSI = null

    onPlanetLoaded = (planet) =>{
        this.setState({
            planet,
          
        });

        this.setState({
            loading: false 
        })

    }

    onError = (err) => {
        this.setState({
            loading: false,
            error: true
        })
    }

    updatePlanet = () => {
        const numberPlanet = this.getRandomNumberPlanet()
        this.swapiService.getPlanet(numberPlanet)
         .then(this.onPlanetLoaded)
         .catch(this.onError);
    }

   
    getRandomNumberPlanet = function (){
        return Math.floor(Math.random() * 9 + 1);
    }

    
    componentDidMount(){
        this.updatePlanet();
        this.idSI = setInterval(this.updatePlanet, 3000)
    }


    componentWillUnmount(){
        clearInterval(this.idSI);
    }

    render(){
        const {planet, loading, error} = this.state;
        const content = (loading || error) ? null : <Cotent planet={planet}/>;
        const spiner = loading ? <Loader/> : null;
        const errorIndicator = error ? <ErrorIndication/> : null;
        
        
        return (
           <div className="d-flex bg-dark random-palnet">
                {content}
                {spiner}
                {errorIndicator}
           </div>      
        )
    }
}


const Cotent = ({planet}) => {
    const {id, name, population, rotationPlanet, diametr} = planet;
    const src1 = `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`;
    const src2 = 'https://starwars-visualguide.com/assets/img/placeholder.jpg';

    const src = id === '1' ? src2: src1;
    return(
        <React.Fragment>
            <img width={150} 
                    height={150} 
                    alt-text="planet" 
                    src={src}/>
                <div className="random-planet-data">
                    <h4>Planet {name}</h4>
                    <ul className="list-menu">
                        <li>
                            <span>Porulation:</span>
                            <span>{population}</span>
                        </li>
                        <li>
                            <span>Rotation period:</span>
                            <span>{rotationPlanet}</span>
                        </li>
                        <li>
                            <span>Diametr:</span>
                            <span>{diametr}</span>
                        </li>
                    </ul>
                </div> 
        </React.Fragment>
    )
}