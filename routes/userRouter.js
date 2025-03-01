const { Router } = require("express");
const usersController = require("../controllers/usersController");
const usersRouter = Router();

usersRouter.get("/", usersController.usersListGet);
console.log('im here')
usersRouter.get("/new", usersController.usersCreateGet);
usersRouter.post("/new", usersController.usersCreatePost);

module.exports = usersRouter;