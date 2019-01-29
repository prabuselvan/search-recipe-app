import React from 'react';
import {Link} from 'react-router-dom';
import './searchLists.css';
const searchLists = (props)=> {
    return (
         <div className="container">
           <div className="row">
             {props.recipes.map((recipe, index)=> {
                    return (
                            <div key={recipe.recipe_id} className="col-md-4">
                                <div className="recipes__box">
                                    <img src={recipe.image_url} alt={recipe.title}/>
                                        <div className="recipes_text">
                                              <h5 className="recipes__title"> {recipe.title.length<20 ? recipe.title : recipe.title.substring(0,25)}... </h5>
                                              <p className="recipes_publisher">  Publisher : <span> {recipe.publisher} </span> </p>
                                        </div>
                                        <button className="recipes__button">
                                            <Link 
                                                to={{
                                                    pathname:`/recipe/${recipe.recipe_id}`,
                                                    state: {recipe: recipe.title}
                                                }}
                                                >View Recipe </Link>                             
                                        </button>
                                </div>
                            </div>       
                        )
             })}

            </div>
         </div>
    )
}

export default searchLists;