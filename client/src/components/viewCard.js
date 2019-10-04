import React from "react";
import "../styles/resultsCard.css";




//add props to display the cards dynamically....
function ViewCards(props, {children}) {

  const style={

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
            {children}
            <div style={style.div}>
            <div><h5>{props.bookTitle}</h5></div>
            
            </div>
            
            <div style={style.divOne}>
                
            <button onClick={() => props.saveABook(bookQuery)} >Save</button>
                
            </div>



            <div></div>

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

export default ViewCards;