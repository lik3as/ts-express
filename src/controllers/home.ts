import {Request, Response} from 'express'
import path from 'path'

export default (req: Request, res: Response) => {
    return res.sendFile(path.join(__dirname, "../../build/home.html"))
}
