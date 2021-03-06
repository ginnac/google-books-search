import React, { Component } from "react";
import API from "../utils/API";
import Jumbotron from "../components/jumbotron";
import { Input, SearchBtn } from "../components/searchBox";
import { Container, Box, BoxOne } from "../components/grid";
import Cards from "../components/resultsCard"
import Nav from "../components/navbar";
import "../styles/resultsCard.css";


class Search extends Component {
  state = {
    books: [],
    title: "Harry potter",
    search: true,
    saved: false
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getGoogleBooks(this.state.title)
      .then(res => {
        console.log(res.data.items);
        this.setState({books:res.data.items, title: "" });
        console.log(this.state.books);
      })
      .catch(err => console.log(err));
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state.title)
  };

  handleSubmit = event => {
    event.preventDefault();
    this.loadBooks(this.state.title);
   
  };

  saveABook = (bookQuery) => {
      API.saveBook(bookQuery)
        .then(res => {console.log(res); this.loadBooks()})
        .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
      <Nav
      search = {this.state.search} 
      saved = {this.state.saved}/>
      <Container fluid>
     <Jumbotron>
      <h1>(React) Google Book Search</h1>
      <p>Search for and Save Books of your Interest</p>
     </Jumbotron>
     <Box>
     <h4 className="mb-4" >Book Search</h4>
       <p>Title:</p>
     <Input
       value={this.state.title}
       onChange={this.handleInputChange}
       name="title"
       placeholder="Title">
       </Input>
     <SearchBtn
     onClick={this.handleSubmit}>
       Search
     </SearchBtn>
     </Box>


     <BoxOne>
     <h4 className="mb-4"> Results</h4>
     {this.state.books.map(book => (

            <Cards
              id={book.id}
              key={book.id}
              saveABook = {this.saveABook}
              bookTitle={book.volumeInfo.title}
              authors={book.volumeInfo.authors ? book.volumeInfo.authors.join(", "): "No Available Author"}
              image={book.volumeInfo.imageLinks.thumbnail}
              description={book.volumeInfo.description}
              link={book.volumeInfo.infoLink}/>


     ))}



      <p className="text-right"><a  href="https://github.com/ginnac/google-books-search"> <p className="atag">Find GitHub Repository Here</p></a></p>
     </BoxOne>

     </Container>
      </div>
     
    );
  }
}

export default Search;
