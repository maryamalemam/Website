import React, { Fragment } from "react";
import Home from "./component/Home.js/Home";
import Navs from "./component/Navs/Navs";
import {BrowserRouter , Routes , Route} from "react-router-dom";
import "./App.css";


function App () {
    return (
        <div>

     <Fragment>
        <Navs/>
        <Home/>
     </Fragment>

    
      
     <BrowserRouter>
       <Routes>

          <Route/>

       </Routes>
     </BrowserRouter>

     </div>
    );
}
export default App;
 