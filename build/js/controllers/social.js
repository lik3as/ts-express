"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
exports.default = {
    page(req, res) {
        return res.sendFile(path_1.default.join(__dirname, '../../build/socialinks.html'));
    },
    img(req, res) {
        return res.sendFile(path_1.default.join(__dirname, '../../build/assets/icon.png'));
    }
};
