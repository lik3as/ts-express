"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
class App {
    constructor(router) {
        this.server = (0, express_1.default)();
        this.router = router;
        this.middleware();
    }
    middleware() {
        this.server.use(this.router);
    }
}
exports.default = App;
