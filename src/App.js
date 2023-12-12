import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Work from "./Components/Work";
import Contacts from "./Components/Contacts";

function App() {
    return (
        <div>
            <Navbar/>
            <Home/>
            <About/>
            <Skills/>
            <Work/>
            <Contacts/>
        </div>
    );
}

export default App;
