"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameManager = exports.GameManager = void 0;
class GameManager {
    constructor() {
        this.games = [];
        this.games = [];
    }
    addMove(id, move) {
        console.log(`Adding move ${move} to ${id}`);
        const game = this.games.find(game => game.id === id);
        game ? game === null || game === void 0 ? void 0 : game.moves.push(move) : console.log(`game with gameId ${id} not found`);
    }
    addGame(gameId) {
        const game = {
            id: gameId,
            whitePlayerGame: "alex",
            blackPlayerGame: "morgan",
            moves: []
        };
        this.games.push(game);
    }
    log() {
        console.log(this.games);
    }
}
exports.GameManager = GameManager;
exports.gameManager = new GameManager();
