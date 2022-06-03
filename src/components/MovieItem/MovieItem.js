import React, { Component } from 'react';
import './MovieItem.css';
import {connect} from "react-redux"
import {addToMovie} from "../../redux/actions/action";

class MovieItem extends Component{
  state={
    textValue:"Add To List"
  }
  show=()=>{
    this.setState({textValue:'Added'})
  }
    render(){
      const { textValue } = this.state;
        const {Title,Poster,Year,imdbID,addMovie,disabled}=this.props
        return(
            <article className="movie-item">
            <img className="movie-item__poster" src={Poster} alt={Title} />
            <div className="movie-item__info">
              <h3 className="movie-item__title">
                {Title}&nbsp;({Year})
              </h3>
              <button
                type="button"
                className="movie-item__add-button"
                onClick={() => {
                  addMovie(imdbID);
                  this.show()
                }}
                
                disabled={disabled}>
                {textValue}
              </button>
            </div>
          </article>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      addMovie: (id) => dispatch(addToMovie(id)),
    };
  };
  
  export default connect(null, mapDispatchToProps)(MovieItem);