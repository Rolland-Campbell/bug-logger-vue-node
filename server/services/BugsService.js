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
    return await _repository.create(data)
  }

  async editById(data, id) {
    return await _repository.findOneAndUpdate({ _id: id }, data)
  }

  async deleteById(id) {
    let data = await _repository.findByIdAndUpdate(id, { closed: true });
    if (!data) {
      throw new Error("Invalid Id");
    }
  }
}

const bugsService = new BugsService();
export default bugsService;
