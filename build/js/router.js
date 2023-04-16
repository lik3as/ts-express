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
router.get('/iconubuntu.png', social_1.default.icon_ubuntu);
router.get('/iconfedora.png', social_1.default.icon_fedora);
router.get('/icongentoo.png', social_1.default.icon_gentoo);
router.get('/evilseed.mp3', social_1.default.seed);
router.get('/eyes', social_1.default.eyes_img);
router.get('/li', social_1.default.tapes_img);
router.get('/shigeo', social_1.default.shigeo_img);
router.get('/seed', social_1.default.seed_img);
exports.default = router;
