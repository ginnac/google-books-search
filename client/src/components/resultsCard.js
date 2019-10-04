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
    
    divStyle:{
          
        backgroundImage: `url(${props.image})`,
    },   

    div:{
        float:"left",
    },
    divOne:{
        float:"right"
    },
    divTwo:{
        clear:"both"
    }
  }

  let bookQuery ={

    title: `${props.bookTitle}`,
    authors: `${props.authors}`,
    description: `${props.description}`,
    image: `${props.image}`,
    link: `${props.link}`,


  }

  

   
  return (


        <div style={style.border}> 

            <div style={style.div}>
            <div><h5>{props.bookTitle}</h5></div>
            <div>Written by: {props.authors}</div>
            </div>
            
            <div style={style.divOne}>
                <button >View</button>
                <button onClick={() => props.saveABook(bookQuery)} >Save</button>
            </div>



            <div  ></div>

            <div>

            

            <div className="clear">
             <img style={style.div} src={props.image} alt="book"/>
            </div>
            <div style={style.div} >{props.description}</div>
            
            </div>

            <div className="clearfix"></div>
            
        </div>
        


       
  );
}

export default Cards;
