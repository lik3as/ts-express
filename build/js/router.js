"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = __importDefault(require("./controllers"));
const path_1 = __importDefault(require("path"));
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    return res.sendFile(path_1.default.join(__dirname, '../build/index.html'));
});
router.get('/social', controllers_1.default.page);
router.get('/evilseed.mp3', controllers_1.default.seed);
router.get('/assets', controllers_1.default.assets, controllers_1.default.assets_styles);
exports.default = router;
