import {Request, Response, Router} from 'express'
import home_ctrl from './controllers/home'
import social_ctrl from './controllers/social'
import path from 'path'

const router = Router()

router.get('/', (req: Request, res: Response) => {
    return res.sendFile(path.join(__dirname, '../build/index.html'));
});

router.get('/home', home_ctrl);
router.get('/social', social_ctrl.page);
router.get('/icon.png', social_ctrl.img);
router.get('/iconubuntu.png', social_ctrl.icon_ubuntu);
router.get('/iconfedora.png', social_ctrl.icon_fedora);
router.get('/icongentoo.png', social_ctrl.icon_gentoo);
router.get('/evilseed.mp3', social_ctrl.seed);
router.get('/eyes', social_ctrl.eyes_img);
router.get('/li', social_ctrl.tapes_img);
router.get('/shigeo', social_ctrl.shigeo_img);
router.get('/seed', social_ctrl.seed_img);

export default router;
