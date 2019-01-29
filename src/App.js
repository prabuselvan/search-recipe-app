import React, { Component } from 'react';
import Header from './Header';
import Form from  './Form';
import SearchLists from './searchLists';
import './App.css';

const API_KEY ='89bf5af17524c98c63c9464ce63c6673';
const URL = `https://www.food2fork.com/api/search?key=${API_KEY}&q=shredded%20chicken`;

class App extends Component {

  state= {
    recipes: []
  }
  getRecipe = async (e)=> { 
    e.preventDefault();
    const recipeName=e.target.elements.recipeName.value;
    
    const api_call =  await fetch(`https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`);
    console.log('Response is ', api_call);
    const data= await api_call.json();
    // console.log(data.recipes[0].recipe_id);
    this.setState( {
      recipes: data.recipes
    });

    console.log(this.state.recipes);
    
  }

  render() {
    return (
      <div >
        <Header  heading="RECIPE-SEARCH"/>
        <Form getRecipe={(e) => this.getRecipe(e)}/>
        <SearchLists recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;
 