import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/jumbotron";
import { Container, Box, BoxOne } from "../components/grid";
import Cards from "../components/viewCard"

class Detail extends Component {
  state = {
    books: {}

  };

  componentDidMount() {
    this.loadBookInfo();
  }

  loadBookInfo = () => {
    API.getGoogleBookById(this.props.match.params.id)
      .then(res => {
        console.log(res.data);
        this.setState({ books: res.data.items});
        console.log(this.state.books);
      })
      .catch(err => console.log(err));
  };


  saveABook = (bookQuery) => {
      API.saveBook(bookQuery)
        .then(res => {console.log(res); this.loadBooks()})
        .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
     <Jumbotron>
      <h1>(React) Google Book Search</h1>
      <p>Search for and Save Books of your Interest</p>
     </Jumbotron>


     <BoxOne>
     <h4>Book Details</h4>
    
            <Cards
              
             />
    
     </BoxOne>

     </Container>
    );
  }
}

export default Detail;