const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  address: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  tiktokId: { type: String, required: true },
  photoLabel: { type: String, required: true },
  facebookUrl: { type: String, required: true },
  instagramUrl: { type: String, required: true },
  youtubeUrl: { type: String, required: true },
  digitalSignature: { type: String, required: true },
  type: { type: String, required: true },
});

module.exports = Data = mongoose.model("data", dataSchema);
