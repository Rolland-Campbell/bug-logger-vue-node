import express from "express";
import notesService from "../services/NotesService";

export default class NotesController {
  constructor() {
    this.router = express
      .Router()
      //NOTE  each route gets registered as a .get, .post, .put, or .delete, the first parameter of each method is a string to be concatinated onto the base url registered with the route in main. The second parameter is the method that will be run when this route is hit.
      .get("", this.getAll)
      .post("", this.create)
      .delete("/:id", this.deleteById);
  }

  async getAll(req, res, next) {
    try {
      let data = await notesService.getAll();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      let data = await notesService.create(req.body);
      return res.send(data)
    } catch (error) {
      next(error);
    }
  }

  async deleteById(req, res, next) {
    try {
      let data = await notesService.deleteById(req.params.id)
      return res.send(data)
    } catch (error) {
      next(error)
    }
  }
}