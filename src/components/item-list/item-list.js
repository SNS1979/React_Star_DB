import React, {Component} from "react";
import './item-list.css'
import SwapiService from '../../serveices/swapi-service'
import Loader from "../loader/loader";

/** Props: 
 *     onItemSelected - событие на клик по элементу
 *     onChangeItemSelected - событие o смене выделенного элемента
       getData - список элементов
       content - отображение элемента
 */


export default class ItemList extends Component {
    
    swapi = new SwapiService()

    state = {
        list: [],
        loading: true,
        selectedItem: null
    }

    setSelectedItem(id){
        let idOld = this.state.selectedItem;
        this.setState({
            ...this.state,
            selectedItem: id
        })

        if (this.props.onChangeItemSelected && idOld !== id){
            this.props.onChangeItemSelected(id)
        }
    }

    componentDidMount(){
        this.props.getData()
            .then((data) => {
                this.setState({
                    ...this.state,
                    list:data,
                    loading: false,
                });
                this.setSelectedItem(data[0].id)
            })
            
    }

    renderItem(list, content){
        return list.map((item) => {
            let classList = "bg-dark";
            if (this.state.selectedItem === item.id){
                classList = " selected"
            }
            return (
                <li 
                    key={item.id} 
                    onClick={(e) => {
                        this.setSelectedItem(item.id)
                        return this.props.onItemSelected(item.id)
                    }}
                > 
                    <div className={classList}>
                        {content ? content(item) : item.name}
                    </div>
                    
                </li>
            )
        })
    }

    render(){
        const {list, loading} = this.state;
        if (loading) {
            return <Loader/>
        }
        if(list) {
            return(
                <div className="item-list" >
                    <ul>
                        {this.renderItem(list, this.props.content)}
                    </ul>
                </div>
            )
        }
    }
}