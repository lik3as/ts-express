"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const home_1 = __importDefault(require("./controllers/home"));
const social_1 = __importDefault(require("./controllers/social"));
const path_1 = __importDefault(require("path"));
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    return res.sendFile(path_1.default.join(__dirname, '../build/index.html'));
});
router.get('/home', home_1.default);
router.get('/social', social_1.default.page);
router.get('/icon.png', social_1.default.img);
exports.default = router;
