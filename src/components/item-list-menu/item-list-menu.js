import React, { Component } from "react";
import './item-list-menu.css'


export default class ItemListMenu extends Component {

    maxElem = 100000;
    firstElem = 1;

    getComponent(obj) {
        if (obj === null) return null;


        const mas = []
        let keyLi = 1;
        let count = 1;

        for (let key in obj) {
            if (count >= this.firstElem && count <= (this.maxElem + this.firstElem - 1)) {
                const item = <li key={keyLi++}>
                    <span>{key}:</span>
                    <span>{obj[key]}</span>
                </li>
                mas.push(item);
            }
            count++;
        }

        return mas;
    }


    render() {
        if (this.props.maxElem){
            this.maxElem = this.props.maxElem;
        } 

        if (this.props.firstElem){
            this.firstElem = this.props.firstElem;
        } 

        return (
            <div className="item-list-menu" >
                <ul className="list-menu">
                   {this.getComponent(this.props.obj)}
                </ul>
            </div>
        )
    }
}