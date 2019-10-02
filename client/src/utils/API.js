import axios from "axios";

export default {
  // Gets books from the google books API
  getGoogleBooks: function(query){
    return axios.get("api/googlebooks", {params:{q:query}});
  },

  searchBooks: function(query) {
    console.log("In searchBooks: " + query)
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
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