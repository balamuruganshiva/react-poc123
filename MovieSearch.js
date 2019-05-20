import React from 'react';
export default class MovieSearch extends React.Component{
  render(){
    return(<div className="SearchNew">
        <div className="sortby">
              Sort by
        </div>
        <div className="Popularity">
             <select onChange={(e)=>this.props.popularity(e.target.value)}>
                <option value="0">Popularity</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
             </select>
        </div>
        <div className="languageSearch">
             <select onChange={(e)=>this.props.language(e.target.value)}>
                <option value="">Language</option>
                <option value="Tamil">Tamil</option>
                <option value="Telugu">Telugu</option>
                <option value="English">English</option>
             </select>
        </div>
        {<div className="Search_movie">Search Movie<input type="text" onKeyUp={(e)=>this.props.movieSearch(e.target.value)} /></div>}
    </div>);
  }
}