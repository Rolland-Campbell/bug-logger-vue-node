import express from "express";
import bugsService from "../services/BugsService";
import notesService from "../services/NotesService";

export default class BugsController {
  constructor() {
    this.router = express
      .Router()
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      .get("", this.getAll)
      .get("/:id", this.getById)
      .get("/:id/notes", this.getBugNotes)
      .post("", this.create)
      .put("/:id", this.editById)
      .delete("/:id", this.deleteById)
  }

  async getAll(req, res, next) {
    try {
      let data = await bugsService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getById(req, res, next) {
    try {
      let data = await bugsService.getById(req.params.id);
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async getBugNotes(req, res, next) {
    try {
      let data = await notesService.getAll(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      let data = await bugsService.create(req.body);
      return res.send(data)
    } catch (error) {
      next(error);
    }
  }

  async editById(req, res, next) {
    try {
      let data = await bugsService.editById(req.params.id, req.body);
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

  async deleteById(req, res, next) {
    try {
      let data = await bugsService.deleteById(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }

}
