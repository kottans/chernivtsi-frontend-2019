import React from 'react';
import {Link} from 'react-router-dom';

export default class Items extends React.Component {
    state = {
        items : []   
    }
    componentDidMount() {
        this.fetchItems();
    }

    fetchItems = async () => {
        const fetchData = await fetch('https://swapi.co/api/people/');
        const data = await fetchData.json();
        this.setItems(data);
    }

    setItems(arr) {
        this.setState({
            items : arr.results
        })
    }

    render() {
        return(
            <div>
                {this.state.items.map((item, i) => <h3 key={item.name} ><Link to={`/items/${i+1}`} className="items">{item.name}</Link></h3>)}
            </div>
        )
    }
}