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
router.get('/icon.png', controllers_1.default.img);
router.get('/iconubuntu.png', controllers_1.default.icon_ubuntu);
router.get('/iconfedora.png', controllers_1.default.icon_fedora);
router.get('/icongentoo.png', controllers_1.default.icon_gentoo);
router.get('/evilseed.mp3', controllers_1.default.seed);
router.get('/assets', controllers_1.default.img_assets);
exports.default = router;
