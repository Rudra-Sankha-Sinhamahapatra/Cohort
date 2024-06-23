"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("./logger");
const store_1 = require("./store");
(0, logger_1.startLogger)();
setInterval(() => {
    let id = Math.random().toString();
    store_1.gameManager.addGame(id);
    store_1.gameManager.addMove(id, "check");
}, 5000);
