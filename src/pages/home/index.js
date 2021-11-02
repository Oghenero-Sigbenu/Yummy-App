import React from "react";
import RecipeCard from "../../components/recipe_card";
import Parfait from "../../assets/images/parfait.jpg";
import Burger from "../../assets/images/burger.jpeg";
import Cake from "../../assets/images/cake.jpeg";
import Meat from "../../assets/images/meat.jpeg";
import Banner from "../../assets/images/banner-1.jpeg";
import Banner1 from "../../assets/images/banner.jpeg";

function Home() {
  return (
    <div className="landing-page">
        <div className="banner">
            <div className="text">
                <div className="intro">
                    <h1>Share your recipes with us.</h1>
                    <p>Explore hundreds of recipe from around the world.</p>
                    <div>
                        <input type="text"/>
                        <button>Search</button>
                    </div>
                </div>
            </div>
            <div className="banner__bg"></div>
        </div>
        <div className="second-section">
            <div className="d-flex justify-content-between mt-3 mb-3">
                <h4>Explore Recipes</h4>
                <button>View all</button>
            </div>
            <div className="recipes d-flex justify-content-between flex-wrap">
                <RecipeCard url={Parfait} />
                <RecipeCard url={Meat}/>
                <RecipeCard url={Cake}/>
                <RecipeCard url={Burger}/>
                <RecipeCard url={Parfait} />
                <RecipeCard url={Meat}/>
                <RecipeCard url={Cake}/>
                <RecipeCard url={Burger}/>
                <RecipeCard url={Parfait}/>
            </div>
        </div>
        <div className="third-section">
             <h5>Recieve New Recipes <br/>
             Join Our Newsletter
             </h5>
            <div className="news">
                <input type="text"/>
                <button>Search</button>
            </div>
        </div>
    </div>
  );
}

export default Home;
