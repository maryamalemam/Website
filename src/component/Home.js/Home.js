import React, { Fragment } from "react";
import Header from "./Header";
import "./Home.css";


const Home = () => {
    return (

        <Fragment>

             <Header/>
                                
               <section className="section4">
                 <div className="container">
                  <div className="row">
                    <div className="col-md-9">
                      <h2>We Make Everything By Hand With The Best Possible Ingredient.</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum amet leo.</p>
                    
                      <p>& mostraizar</p>
                      <p>& siram</p>
                      <p>& face loction</p>
                      
                      <button><a href ="https://www.glosscairo.com/cosmetics-category/">Learn More</a></button>
                    </div>
                    
                        
                      </div>
                      
                    </div>
                  
                 
               </section>

              <div className="offer">
                    <h2>Every Order You Make Will Get You 6% Cashback </h2>
                        </div> 
  </Fragment>
     


   
    );
}
export default Home;

