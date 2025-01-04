const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const InvestorSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name field is required"],
  },

  email: {
    type: String,
  },
 
  firm: {
    type: String,
    required: [true, "firm field is required"],
  },

  video: {
    type: String,
    required: [true, "video field is required"],
  },

  geography: {
    type: [String],
    required: [true, "geography field is required"],
  },

  city: {
    type: String,

  },

  state: {
    type: String,
  },

  investment_min: {
    type: Number,

  },

  investment_max: {
    type: Number,
    
  },

  investment_sweet_spot: {
    type: Number,

  },

  participation: {
    type: [String],
  },

  proptech_only: {
    type: Boolean,
    required: [true, "Prop Tech Only field is required"],
  },

  sectorsofinterest: {
    type: [String],
    required: [true, "sectors of interest field is required"],
  },

  series: {
    type: [String],
    required: [true, "series field is required"],
  },

  tech_medium: {
    type: [String],
    required: [true, "tech medium field is required"],
  },

  flag: {
    type: String,
    required: [true, "tech medium field is required"],
  },


});


const Investor = mongoose.model("Investor", InvestorSchema);

module.exports = Investor;
