import React from 'react';

export default class Item extends React.Component {
    state = {
        item : []   
    }
    componentDidMount() {
        this.fetchItem();
    }

    fetchItem = async () => {
        const fetchData = await fetch(`https://swapi.co/api/people/${this.props.match.params.name}/`);
        const data = await fetchData.json();
        this.setItem(data);
        
    }

    setItem(arr) {
        this.setState({
            item : arr
        })
        console.log(this.state.item)
    }

    render() {
        const {name, birth_year, homeworld} = this.state.item;
        return(
            <div className="item">
               <h3>{name}</h3>
               <h3>{birth_year}</h3>
               <a href={homeworld}><h3>Homeworld</h3></a>
            </div>
        )
    }
}