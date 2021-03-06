import React from "react";
import "../styles/navbar.css";


const style={
    navStyle:{
    marginBottom:20,

    }
}

function Navbar(props) {

// return(<nav className="navbar"><ul><li style={{textShadow: props.shadow}} className="title navbar-brand"><a href="/">Clicky Game</a>
// </li><li style={{color: props.color, textShadow: props.shadow}} className="navbar-text center">{props.message}</li><li style={{textShadow: props.shadow}} className="navbar-text score">Score: {props.score} | Top Score: {props.topScore}</li></ul></nav>);

// }

return(
<nav style={style.navStyle} className="navbar navbar-expand-lg navbar-light bg-info">
<a className=" text-light navbar-brand" href="/">Google Books Searcher</a>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNav">
  <ul className="navbar-nav">
    <li className= {props.search === true ? "nav-item" : 'nav-item active'}>
      <a className="nav-link text-light" href="/Search">Search<span className="sr-only">(current)</span></a>
    </li>
    <li className= {props.saved === true ? "nav-item" : 'nav-item active'}>
      <a className="nav-link text-light" href="/Saved">Saved</a>
    </li>
  </ul>
</div>
</nav>



);

}

export default Navbar;