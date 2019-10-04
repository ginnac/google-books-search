import React from "react";
import "../styles/resultsCard.css";




//add props to display the cards dynamically....
function SavedCards(props) {

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
    divTwo:{
        clear:"both"
    }
  }

  

   
  return (


        <div style={style.border}> 

            <div style={style.div}>
            <div><h5>{props.title}</h5></div>
            <div>Written by: {props.authors}</div>
            </div>
            
            <div style={style.divOne}>
                <button >View</button>
                <button onClick={() => props.deleteABook(props.id)} >Delete</button>
                
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

export default SavedCards;