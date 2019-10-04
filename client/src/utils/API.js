import axios from "axios";

export default {
  // Gets books from the google books API
  getGoogleBooks: function(query){
    return axios.get("api/googlebooks", {params:{q:query}});
  },
  
  // Gets all saved books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Deletes the saved book by the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};