import React, { Fragment } from "react";
import "./Header.css";
import sec1 from "./../../images/25.jpg";
import sec2 from "./../../images/10.jpg";
import sec3 from "./../../images/22.jpg";
import sec4 from "./../../images/18.jpg";
import sec5 from "./../../images/20.jpg";
import sec6 from "./../../images/arrow.png";
import sec7 from "./../../images/20.jpg";
import sec8 from "./../../images/24.jpg";
import sec9 from "./../../images/20.jpg";
import sec10 from "./../../images/24.jpg";
import sec11 from "./../../images/20.jpg";
import sec12 from "./../../images/24.jpg";
const Header = () => {
    return(

        <Fragment>
         <header> 
         </header>

        

    <section class="slider">
      <div class="container">
        <img src={sec1}  title="logo"/>
       </div> 
     </section> 

    <section class="category section-padding">
      <div class="section-header">
       <h2 class="section-title">Special category</h2>
        <span class="line"></span>
   </div> 
       <div class="container">
         <div class="category-items">

           <a class="single" href="https://www.glosscairo.com/cosmetics-category/">
             <div class="category-item">
              <img className="sec3" src={sec2} title="logo"/>
              <h4 class="category-item-subtitle">Most Popular</h4>
              <h2 class="category-item-title">mostraiser Collection</h2>
             <img  className="icons"src={sec6} title="logo"/>
        </div> 
       </a>

        <a class="single" href="https://www.glosscairo.com/cosmetics-category/">
        <div class="category-item">
            <img className="sec3" src={sec3} title="logo"/>
            <h4 class="category-item-subtitle">Most Popular</h4>
            <h2 class="category-item-title">Conditioner Collection</h2>
            <img  className="icons"  src={sec6} title="logo"/>

        </div> 
      </a>

        <a class="single" href="https://www.glosscairo.com/cosmetics-category/">
        <div class="category-item">
            <img  className="sec3" src={sec4} title="logo"/>
            <h4 class="category-item-subtitle">Most Popular</h4>
            <h2 class="category-item-title">Siram Gel Collection</h2>
            <img className="icons" src={sec6} title="logo"/>
        </div>
        </a>

        <a class="single" href="https://www.glosscairo.com/cosmetics-category/">
        <div class="category-item">
            <img className="sec3" src={sec5} title="logo"/>
            <h4 class="category-item-subtitle">Most Popular</h4>
            <h2 class="category-item-title">mostraiser Collection</h2>
            <img className="icons" src={sec6} title="logo"/>  
       </div> 
      </a>
    </div> 
     
         <div class="container">
           <div class ="top1">
            <h2>Offers And cashback</h2>
        </div>
      </div>
           <div class="section3">
              <div class="section3-desc">
                <div class="top">      
                  <h2 class="section3-title">Online Make up Store</h2>
                  <span class="section3-subtitle">(marketing)</span>
             </div> 
                <p> this is our online make up store where 
                   show alot of products fot scincare routine
                   make up - mostraiser - siram - sun block ...
                </p>
            <div class="lines">
                <span> </span>
                <span> </span>
                <span> </span>
            </div> 
            </div> 
        <div class="section3-item">
            <div class="section3-item-info">
                <h3>10% cashback</h3>
                <h2>If You Order Now</h2>
            </div> 
        </div> 
        <div class="section3-item">
            <div class="section3-item-info">
                <h3>10% cashback</h3>
                <h2>If You Order Now </h2>
            </div> 
        </div> 
    </div> 



    <div class="section4">
        <div class="section4-item">
            <div class="section4-bt1">
            <button><a href="https://www.glosscairo.com/cosmetics-category">Order Now</a></button>
            </div>
            <div class="section4-info">
                <h3>Free Delivery</h3>
                <span>Free Shipping On All Order</span>
            </div> 
        </div> 
        <div class="section4-item">
            <div class="section4-bt2">
            <button><a href="https://www.glosscairo.com/cosmetics-category/">Order Now</a></button>
            </div>
            <div class="section4-info">
                <h3>Free Delivery</h3>
                <span>Free Shipping On All Order</span>
            </div> 
        </div> 
        <div class="section4-item">
            <div class="section4-bt3">
            <button><a href="https://www.glosscairo.com/cosmetics-category/">Order Now</a></button>
            </div>
            <div class="section4-info">
                <h3>Free Delivery</h3>
                <span>Free Shipping On All Order</span>
            </div> 
        </div> 
        <div class="section4-item">
            <div class="section4-bt4">
                <button><a href="https://www.glosscairo.com/cosmetics-category/">Order Now</a></button>
            </div>
            <div class="section4-info">
                <h3>Free Delivery</h3>
                <span>Free Shipping On All Order</span>
            </div> 
        </div> 
        <div class="section4-item">
            <div class="sprite-icon sprite-icon-5">
            <button><a href="https://www.glosscairo.com/cosmetics-category/">Order Now</a></button>
            </div>
            <div class="section4-info">
                <h3>Free Delivery</h3>
                <span>Free Shipping On All Order</span>
           </div> 
          </div> 
         </div> 
        <hr>
       </hr>
      </div> 
    </section>

    <section class="products section-padding">
        <div class="section-header">
            <h2 class="section-title">scincare Products</h2>
            <span class="line"></span>
        </div> 
        <div class="container">
            <ul class="list-product list-unstyled">
                <li>mostraiser</li>
                <li>Siram</li>
                <li>Conditioner</li>
                <li>Sun block</li>
            </ul>
            <div class="products-items">
                <div class="product-item">
                    <div class="product-img">
                        <img className="over" src={sec7} titel="logo"/>
                        <div class="product-overlay">
                        <img src={sec12} titel="logo"/>
                        </div> 
                        <div class="product-info">
                            <span>Product Item</span>
                            <h3>108$</h3>
                        </div> 
                    </div> 
                </div> 
                <div class="product-item">
                    <div class="product-img">
                    <img src={sec8} titel="logo"/>
                        <div class="product-overlay">
                        <img className="over"  src={sec7} titel="logo"/>
                        </div> 
                        <div class="product-info">
                            <span>Product Item</span>
                            <h3>108$</h3>
                        </div> 
                    </div> 
                </div> 
                <div class="product-item">
                    <div class="product-img">
                    <img className="over" src={sec9} titel="logo"/>
                        <div class="product-overlay">
                        <img src={sec8} titel="logo"/>
                        </div> 
                        <div class="product-info">
                            <span>Product Item</span>
                            <h3>108$</h3>
                        </div> 
                    </div> 
                </div> 
            </div> 
            <div class="products-items">
                <div class="product-item">
                    <div class="product-img">
                    <img src={sec10} titel="logo"/>
                        <div class="product-overlay">
                        <img className="over"  src={sec9} titel="logo"/>
                        </div> 
                        <div class="product-info">
                            <span>Product Item</span>
                            <h3>108$</h3>
                        </div> 
                    </div> 
                </div> 
                <div class="product-item">
                    <div class="product-img">
                    <img className="over" src={sec11} titel="logo"/>
                        <div class="product-overlay">
                        <img src={sec10} titel="logo"/>
                        </div> 
                        <div class="product-info">
                            <span>Product Item</span>
                            <h3>108$</h3>
                        </div> 
                    </div> 
                </div> 
                <div class="product-item">
                    <div class="product-img">
                    <img src={sec12} titel="logo"/>
                        <div class="product-overlay">
                        <img className="over" src={sec11} titel="logo"/>
                        </div> 
                        <div class="product-info">
                            <span>Product Item</span>
                            <h3>108$</h3>
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div> 
    </section>
 

   </Fragment> 

    );
}
export default Header;