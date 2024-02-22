import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
  phone: { type: String, required: true },
  company: { type: String, required: true },
  name: { type: String, required: true },
})
module.exports = mongoose.model('ChannelWhatsapp', accountSchema);