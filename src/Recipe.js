import React from 'react';
import './App.css';
const API_KEY ='89bf5af17524c98c63c9464ce63c6673';
class Recipe extends React.Component {
    
    state= {
        activeRecipe : []
    }

    componentDidMount= async ()=> {
        const title  =this.props.location.state.recipe;

        const req= await fetch(
            `https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`);

        const res= await req.json();
        
        // console.log(res.recipes[0]);
        this.setState( {
            activeRecipe: res.recipes[0]
        } );

        console.log(this.state.activeRecipe);
        
        
    }
    render() {
        // console.log(this.props);

        const recipe  = this.state.activeRecipe;
        return(
            <div className="container">
             
                    <div className="active-recipe">
                            <img className="active-recipe__img" src={recipe.image_url} alt={recipe.title}/>
                            <h3 className="active-recipe__title"> {recipe.title}</h3>
                            <h4 className="active-recipe__publisher"> Publisher : <span>{recipe.publisher} </span></h4>

                    </div>
              
            </div>
        )
    }
}

export default  Recipe;