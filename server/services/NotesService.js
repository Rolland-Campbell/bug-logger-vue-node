import mongoose from "mongoose";
import Note from "../models/Note";

const _repository = mongoose.model("Note", Note);

class NotesService {
  async getAll(id) {
    return await _repository.find({ bug: id });
  }

  async create(data) {
    return await _repository.create(data)
  }

  async deleteById(id) {
    let data = await _repository.findByIdAndRemove(id);
    if (!data) {
      throw new Error("Invalid Id");
    }
  }
}

const notesService = new NotesService();
export default notesService;