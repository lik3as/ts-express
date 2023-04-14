"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const router_1 = __importDefault(require("./router"));
new app_1.default(router_1.default).server.listen(8080, () => {
    console.log("Server connected");
});
