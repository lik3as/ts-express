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
    seed(req, res) {
        return res.sendFile(path_1.default.join(__dirname, '../../build/assets/evilseed.mp3'));
    },
    assets_styles(req, res) {
        const filename = req.query.style;
        return res.sendFile(path_1.default.join(__dirname, `../../build/styles/${filename}`));
    },
    assets(req, res, next) {
        if (req.query.img != undefined) {
            const img_name = req.query.img;
            return res.sendFile(path_1.default.join(__dirname, `../../build/assets/${img_name}`));
        }
        else {
            return next();
        }
    }
};
