import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;


let bug = new Schema({
  closed: { type: Boolean, required: true, default: false },
  description: { type: String, required: true },
  title: { type: String, required: true },
  reportedBy: { type: String, required: true }, //The provided name for who reported the bug
  closedDate: { type: Date }
}, { timestamps: true })

export default bug;
