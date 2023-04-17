import {Request, Response, Router} from 'express'
import social_ctrl from './controllers'
import path from 'path'

const router = Router()

router.get('/', (req: Request, res: Response) => {
    return res.sendFile(path.join(__dirname, '../build/index.html'));
});

router.get('/social', social_ctrl.page);
router.get('/icon.png', social_ctrl.img);
router.get('/iconubuntu.png', social_ctrl.icon_ubuntu);
router.get('/iconfedora.png', social_ctrl.icon_fedora);
router.get('/icongentoo.png', social_ctrl.icon_gentoo);
router.get('/evilseed.mp3', social_ctrl.seed);
router.get('/assets', social_ctrl.img_assets);

export default router;
