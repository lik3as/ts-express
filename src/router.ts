import {Request, Response, Router} from 'express'
import social_ctrl from './controllers'
import path from 'path'

const router = Router()

router.get('/', (req: Request, res: Response) => {
    return res.sendFile(path.join(__dirname, '../build/index.html'));
});

router.get('/social', social_ctrl.page);
router.get('/evilseed.mp3', social_ctrl.seed);
router.get('/assets', social_ctrl.assets, social_ctrl.assets_styles);

export default router;
