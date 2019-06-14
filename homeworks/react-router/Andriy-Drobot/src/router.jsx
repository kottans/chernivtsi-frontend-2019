import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import PropTypes from 'prop-types'


const Home = (HomeText) => (
    <h1>{HomeText}</h1>
);

Home.propTypes = {
    HomeText: PropTypes.string
};


const About = (AboutText) => (
    <h1>{AboutText}</h1>
);

About.propTypes = {
    AboutText: PropTypes.string
};


const Item = (ItemText) => (
    <h1>{ItemText}</h1>
);

Item.propTypes = {
    ItemText: PropTypes.string
};

const MainRouter = (Header,propsHome,propsAbout,propsItem) => (
   
    <Router>
         <div>
            <Header/>
            <Route path = "/" exact  render = {() => Home(propsHome)} />
            <Route path =  "/about/" render = {() => About(propsAbout)}/>
            <Route path = "/item/" render = {() => Item(propsItem)}/>
        </div>
    </Router>
    
);

MainRouter.propTypes = {
    Header: PropTypes.element
};

export default MainRouter;


