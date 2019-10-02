const axios = require("axios");
const router = require("express").Router();
const bookController = require("../controllers/bookController");


// Matches with "/api/googlebooks"
router.get("/googlebooks", (req, res) => {
  var query = req.query;
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
      .then ((data) => res.json(data))
      .catch(err => res.status(422).json(err));
  });


// Matches with "/api/books"
router.route("/books")
  .get(bookController.findAll)
  .post(bookController.create);

// Matches with "/api/books/:id"
router
  .route("books/:id")
  .get(bookController.findById)
  .put(bookController.update)
  .delete(bookController.remove);

module.exports = router;