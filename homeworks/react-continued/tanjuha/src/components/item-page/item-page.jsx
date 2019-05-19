import React from "react";
import "./item-page.css";
import { Route, Link} from "react-router-dom";

const homer = [
    {name: 'item 1', id: '1', img:'http://s.tcdn.co/837/98f/83798fe7-d57e-300a-93fa-561e3027691e/27.png'},
    {name: 'item 2', id: '2', img:'http://s.tcdn.co/837/98f/83798fe7-d57e-300a-93fa-561e3027691e/10.png'},
    {name: 'item 3', id: '3', img:'http://s.tcdn.co/837/98f/83798fe7-d57e-300a-93fa-561e3027691e/28.png'}
];

const Item = ({match}) => {
    const items = homer.find(({id})=> id === match.params.id);
    return(
        <div className="item">
            <h4>{items.name}</h4>
            <img src={items.img} alt="Homer"/>
        </div>
    )
};

const ItemPade = () => {
    return(
        <div className="item-page">
            <ul>
                {homer.map(({id,name})=>(
                    <li key={id}>
                        <Link to={`/item/${id}`}>{name}</Link>
                    </li>
                ))}
            </ul>
            <Route path={`/item/:id`} component={Item}/>
        </div>
    )
};

export default ItemPade;