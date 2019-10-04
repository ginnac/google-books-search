import React from "react";
import "../styles/resultsCard.css";




//add props to display the cards dynamically....
function Cards(props) {

  const style={
    border:{
        borderStyle: "solid",
        borderColor: "lavender",
        paddingRight:20,
        paddingLeft:20,
        paddingTop:20,
        paddingBottom:20,
        marginBottom:20
    },

    div:{
        float:"left",
    },
    divOne:{
        float:"right"
    },
    pic:{
        marginRight: 8
    },
    textsize:{
        fontSize: 22,
        
    },
    textsizeAuthor:{
        fontSize: 20,
        
    }
  }


  let bookQuery ={
    bookId: `${props.id}`,  
    title: `${props.bookTitle}`,
    authors: `${props.authors}`,
    description: `${props.description}`,
    image: `${props.image}`,
    link: `${props.link}`,
  }

  

   
  return (


        <div style={style.border}> 
          <div className="row">

            <div className="col-6">
                <div><h5 style={style.textsize} >{props.bookTitle}</h5></div>
                <div style={style.textsizeAuthor}>Written by: {props.authors}</div>
            </div>
            
            <div className="col-6 d-flex align-items-end flex-column">
            <div>
                <button className="btn btn-dark"><a href={`/Book/${props.id}`}> View </a> </button>
                <button className="btn btn-dark colorbtn" onClick={() => props.saveABook(bookQuery)} >Save</button>
                
            </div>
            </div>


          </div>
          

           

            <div className="theContainer">

            <div className="clear">
            <img style={style.pic} src={props.image} alt="book"/>
            </div>

            <div className="clearfix">
            <div >{props.description}</div>  
            </div>
            
            </div>

               
           
            
        </div>
        


       
  );
}

export default Cards;
