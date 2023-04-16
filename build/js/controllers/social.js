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
    },
    icon_fedora(req, res) {
        return res.sendFile(path_1.default.join(__dirname, '../../build/assets/iconfedora.png'));
    },
    icon_gentoo(req, res) {
        return res.sendFile(path_1.default.join(__dirname, '../../build/assets/icongentoo.png'));
    },
    icon_ubuntu(req, res) {
        return res.sendFile(path_1.default.join(__dirname, '../../build/assets/iconubuntu.png'));
    },
    seed(req, res) {
        return res.sendFile(path_1.default.join(__dirname, '../../build/assets/evilseed.mp3'));
    },
    seed_img(req, res) {
        return res.sendFile(path_1.default.join(__dirname, '../../build/assets/evilseed.jpg'));
    },
    shigeo_img(req, res) {
        return res.sendFile(path_1.default.join(__dirname, '../../build/assets/shigeo.jpg'));
    },
    tapes_img(req, res) {
        return res.sendFile(path_1.default.join(__dirname, '../../build/assets/tapes.jpg'));
    },
    eyes_img(req, res) {
        return res.sendFile(path_1.default.join(__dirname, '../../build/assets/eyes.jpg'));
    }
};
