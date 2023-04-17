import {Request, Response, NextFunction} from 'express'
import path from 'path'

export default {
  page(req: Request, res: Response) {
    return res.sendFile(path.join(__dirname, '../../build/socialinks.html'));
  },

  seed(req: Request, res: Response){
    return res.sendFile(path.join(__dirname, '../../build/assets/evilseed.mp3'));
  },

  assets_styles(req: Request, res: Response){
    const filename: string = req.query.style as string;
    return res.sendFile(path.join(__dirname, `../../build/styles/${filename}`))
  },

  assets(req: Request, res: Response, next: NextFunction){
    if(req.query.img != undefined){
      const img_name: string = req.query.img as string;
      return res.sendFile(path.join(__dirname, `../../build/assets/${img_name}`))

    } else{
      return next();
    }
  }
}