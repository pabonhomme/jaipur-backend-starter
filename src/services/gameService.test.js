import * as gameService from "./gameService"

describe("Game service", () => {
  test("should put camels from hand to herd", () => {
    const game = { "_players": [
      { 
          "hand": ["cloth", "silver", "diamonds", "camel"],
          "camelsCount": 2, 
          "score": 0
      },
      {
          "hand": ["gold", "gold", "leather", "diamonds", "spice"],
          "camelsCount": 0,
          "score": 0
      }]}

      gameService.putCamelsFromHandToHerd(game)

      expect(game._players[0].hand.length).toBe(3)
      expect(game._players[0].camelsCount).toBe(3)

  })

  test("should draw cards", () => {
    let deck = ["gold", "gold", "gold", "gold"]

    let drawncards = gameService.drawCards(deck, 2)
    expect(drawncards).toStrictEqual(["gold", "gold"])
    expect(deck).toStrictEqual(["gold", "gold"])

  })

  test("should init a deck", () => {
    let deck = gameService.initDeck()
    expect(deck.length).toBe(52)

  })
})