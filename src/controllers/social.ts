import {Request, Response} from 'express'
import path from 'path'

export default {
    page(req: Request, res: Response) {
        return res.sendFile(path.join(__dirname, '../../build/socialinks.html'))
    },

    img(req: Request, res: Response){
        return res.sendFile(path.join(__dirname, '../../build/assets/icon.png'))
    }
}