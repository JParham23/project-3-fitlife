import React from "react";
import "./SearchForm.css";


// Using the datalist element we can create autofill suggestions based on the props.breeds array
const SearchForm = props => (
  

  
  <form className="search">
    <div className="form-group">
      <label htmlFor="recipe">Search Recipes:</label>

      <input
        // value={props.search}
        // onChange={props.handleInputChange}
        // name="breed"
        // list="breeds"
        // type="text"
        // className="form-control"
        // placeholder="Type in a dog breed to begin"
        // id="breed"
      />
      <datalist id="recipes">
        {/* {props.breeds.map(breed => <option value={breed} key={breed} />)} */}
      </datalist>
      {/* <button
        type="submit"
        onClick={props.handleFormSubmit}
        className="btn btn-success"
      >
        Search
      </button> */}
      <button>
      <a href="https://www.edamam.com/recipes/protein+shake" target="_blank" rel="noopener noreferrer">Find Recipes<i className="fa fa-external-link"></i></a>
      </button>
      
    </div>
  </form>
);

export default SearchForm;
