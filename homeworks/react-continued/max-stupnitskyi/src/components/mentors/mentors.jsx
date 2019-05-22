import React from 'react';
import { Link } from "react-router-dom";
import './mentors.css'

const products = [
    {
        "name": "Denys Dovhan",
        "email": "denysdovhan@gmail.com",
        "photo": "https://avatars2.githubusercontent.com/u/3459374?s=400&v=4"
    },

    {
        "name": "Max Kharena",
        "email": "max.harena@gmail.com",
        "photo": "https://avatars1.githubusercontent.com/u/19487105?s=400&v=4"
    },

    {
        "name": "Denis Zavgorodny",
        "email": "denis.zavgorodny@gmail.com",
        "photo": "https://avatars0.githubusercontent.com/u/1618404?s=400&v=4"
    },

    {
        "name": "Andrew Komarnitskyi",
        "email": "ticapac@gmail.com",
        "photo": "https://avatars0.githubusercontent.com/u/3384599?s=400&v=4"
    },

    {
        "name": "Andrii Voitsekhivskyi",
        "email": "vojander@gmail.com",
        "photo": "https://avatars1.githubusercontent.com/u/23338100?s=400&v=4"
    },

    {
        "name": "Andrii Kostetskyi",
        "email": "kostyandrew@gmail.com",
        "photo": "https://avatars1.githubusercontent.com/u/3501133?s=400&v=4"
    }

]

export const CatalogView = () => {

    return (
        <div className="container">
            <h1> <span role="img" aria-label="emoji-mentor"> 👨‍💻 </span> Mentors <span role="img" aria-label="emoji-mentor"> 👨‍💻 </span></h1>
            <div className="mentors__links">
                {products.map(({ name }) =>
                    <Link className="mentors__link" key={name} to={`/mentors/${name.split(' ').join('_')}`}>{name}</Link>)}
            </div>
        </div>
    )
}


export const ProductView = ({ match }) => {
    const product = products.find(item => item.name.split(' ').join('_') === match.params.name.split(' ').join('_'));
    console.log(products, match.params.name)
    return (
        <div className="container">
            <div className="center-flex">
                <div className="mentor">
                    <div className="mentor__photo"><img src={product.photo} alt="" /></div>
                    <div className="mentor__name">{product.name}</div>
                    <a href={`mailto:${product.email}`} className="mentor__email">{product.email}</a>
                </div>
            </div>
        </div>
    )
}