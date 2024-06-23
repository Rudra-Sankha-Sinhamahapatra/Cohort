import { gameManager } from "./store";

export function startLogger() {
    setInterval(() => {
        gameManager.log();
    }, 5000);
}
