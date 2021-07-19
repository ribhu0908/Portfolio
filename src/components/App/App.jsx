import React from "react";
import { HashRouter, Route } from "react-router-dom";

import "./App.css";

import Home from "./../Home/Home"
import Projects from "./../Projects/Projects"
import About from "./../About/About"
import Skills from "./../Skills/Skills"
import Contact from "./../Contact/Contact"
import NavBar from "./../NavBar/NavBar"
import GoHome from "./../GoHome/GoHome"


const App=()=> {

    return (
        <div>
            <HashRouter>
                <div>
                    <NavBar/> {/*need to be inside router for accessing history object*/}
                    <Route path='/' exact component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/projects' component={Projects} />
                    <Route path='/skills' component={Skills} />
                    <Route path='/contact' component={Contact} />
                    <GoHome />
                </div>
            </HashRouter>
        </div>
    )
}

export default App;