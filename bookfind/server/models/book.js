// import modules
const mongoose = require("mongoose");

// define the book schema
const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },
    
    publisher: {
        type: String,
        required: true
    },
    
    clicks: {
      type: Number,
      required: false,
      default: 0
    },

    description: {
        type: String,
        required: true
    },

    noOfPages: {
        type: Number,
        required: true
    },

    copies: {
        type: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Copy",
            },
        ],
        required: false
    },

    isbn: {
        type: String,
        required: true
    },

    categories: {
        type: [
            { 
                type: String,
            }
        ],
        required: true
    },

    rating: {
        type: Number,
        required: false
    },

    unitPrice: {
        type: Number,
        required: true
    },

    publishedDate: {
        type: Date,
        required: true
    },

    image: {
        type: String,
        required: true
    },
});

// export the book model
module.exports = mongoose.model("Book", bookSchema);