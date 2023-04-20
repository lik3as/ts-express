import {Request, Response, Router} from 'express'
import social_ctrl from './controllers/portfolio'
import path from 'path'

const router = Router()

router.get('/', (req: Request, res: Response) => {
    return res.sendFile(path.join(__dirname, '../build/index.html'));
});

router.get('/social', social_ctrl.page);
router.get('/assets', social_ctrl.assets, social_ctrl.assets_styles);

export default router;
