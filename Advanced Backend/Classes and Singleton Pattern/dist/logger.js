"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startLogger = void 0;
const store_1 = require("./store");
function startLogger() {
    setInterval(() => {
        store_1.gameManager.log();
    }, 5000);
}
exports.startLogger = startLogger;
