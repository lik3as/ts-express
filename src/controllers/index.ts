import {Request, Response} from 'express'
import path from 'path'

export default {
  page(req: Request, res: Response) {
    return res.sendFile(path.join(__dirname, '../../build/socialinks.html'));
  },

  img(req: Request, res: Response){
    return res.sendFile(path.join(__dirname, '../../build/assets/icon.png'));
  },
  
  icon_fedora(req: Request, res: Response){
    return res.sendFile(path.join(__dirname, '../../build/assets/iconfedora.png'));
  },

  icon_gentoo(req: Request, res: Response){
    return res.sendFile(path.join(__dirname, '../../build/assets/icongentoo.png'));
  },

  icon_ubuntu(req: Request, res: Response){
    return res.sendFile(path.join(__dirname, '../../build/assets/iconubuntu.png'));
  },

  seed(req: Request, res: Response){
    return res.sendFile(path.join(__dirname, '../../build/assets/evilseed.mp3'));
  },

  img_assets(req: Request, res: Response){

    const img_name: string = req.query.img as string;
    return res.sendFile(path.join(__dirname, `../../build/assets/${img_name}`))
  }
}
