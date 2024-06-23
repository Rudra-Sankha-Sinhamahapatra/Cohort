export interface Game {
    id: string;
    whitePlayerGame: string;
    blackPlayerGame: string;
    moves: string[];
}

//statc variables and methods
//singleton
export class GameManager {
    games: Game[] = [];
   private static instance:GameManager;
    private constructor() {
        this.games = [];
    }

    static getInstance(){
        if(GameManager.instance){
            return GameManager.instance;
        }
      GameManager.instance=new GameManager();
      return GameManager.instance;
    }

    addMove(id: string, move: string) {
        console.log(`Adding move ${move} to ${id}`);
        const game = this.games.find(game => game.id === id);
        game?game?.moves.push(move):console.log(`game with gameId ${id} not found`);
    }

    addGame(gameId: string) {
        const game: Game = {
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

export const gameManager=GameManager.getInstance()
