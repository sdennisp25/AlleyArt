import React from "react";
import "./search.css";

const Search = () => (
  <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <input id="input_text" type="text" data-length="10"></input>
          <label htmlFor="input_text">Artist</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <textarea id="textarea2" className="materialize-textarea" data-length="30"></textarea>
          <label htmlFor="textarea2">Location</label>
        </div>
      </div>
    </form>
    <a href="/home" className="waves-effect grey darken-3 btn">Submit</a>
  </div>
);

export default Search;