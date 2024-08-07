const express = require("express")
const { getAllUsersController, createUserController, getUserById, updateUser, deleteUser } = require("../controllers/userController")

const router = express.Router()

router.get("/getAll", getAllUsersController)

router.post("/addUser", createUserController)

router.get("/single/:id", getUserById)

router.put("/update/:id", updateUser)

router.delete("/delete/:id", deleteUser)

module.exports = router