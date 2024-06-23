import { startLogger } from "./logger";
import { gameManager } from "./store";

startLogger();

setInterval(() => {
    let id=Math.random().toString();
    gameManager.addGame(id);
    gameManager.addMove(id,"check")
}, 5000);
