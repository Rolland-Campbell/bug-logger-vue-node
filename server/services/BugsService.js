import mongoose from "mongoose";
import Bug from "../models/Bug";

const _repository = mongoose.model("Bug", Bug);

class BugsService {
  async getAll() {
    return await _repository.find({});
  }

  async getById(id) {
    return await _repository.findById(id)
  }

  async create(data) {
    await _repository.create(data)
  }
}

const bugsService = new BugsService();
export default bugsService;
