import express from "express"
import * as gameService from "../services/gameService"

const router = express.Router()

// Listen to POST /games
router.post("/", function (req, res) {
  if(!req) return res.status(404).send("Not Found")
  const newGame = gameService.createGame(req.body.name)
  res.status(201).json({ id: newGame.id, name: newGame.name })
})

export default router