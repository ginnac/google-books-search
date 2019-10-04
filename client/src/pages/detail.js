import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/jumbotron";
import { Container, BoxOne } from "../components/grid";
import ViewCards from "../components/viewCard"
import Nav from "../components/navbar"

class Detail extends Component {
  state = {
    book: {},
    volumeInfo:{},
    imageGallery:{},
    authors: []

  };

  componentDidMount() {
    this.loadBookInfo();
  }

  loadBookInfo = () => {
    API.getGoogleBookById(this.props.match.params.id)
      .then(res => {
        console.log(res.data);

        this.setState({ book: res.data, volumeInfo:res.data.volumeInfo, imageGallery: res.data.volumeInfo.imageLinks, 
          authors:res.data.volumeInfo.authors, });
        console.log(this.state.book);
        console.log(this.state.volumeInfo);
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
      <div>
      <Nav />
      <Container fluid>
     <Jumbotron>
      <h1>(React) Google Book Search</h1>
      <p>Search for and Save Books of your Interest</p>
     </Jumbotron>


     <BoxOne>
     <h4>Book Details</h4>

     <span>Written by: </span>
     {this.state.authors.map(author => (
          <span>{author}  </span>
     ))}
          
            <ViewCards
            id={this.state.book.id}
            key={this.state.book.id}
            saveABook = {this.saveABook}
            bookTitle={this.state.volumeInfo.title}
            authors={this.state.volumeInfo.authors}
            image={this.state.imageGallery.thumbnail}
            description={this.state.volumeInfo.description}
            link={this.state.volumeInfo.infoLink}
            language = {this.state.volumeInfo.language}
            published ={this.state.volumeInfo.publishedDate}
            publisher={this.state.volumeInfo.publisher}
            pages = {this.state.volumeInfo.pageCount}
            rating = {this.state.volumeInfo.averageRating}/>

        
    
     </BoxOne>

     </Container>
     </div>
    );
  }
}

export default Detail;