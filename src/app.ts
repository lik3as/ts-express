import express from 'express';

export default class App{
    public server: express.Application
    private router: express.Router

    constructor(router: express.Router){
        this.server = express()
        this.router = router
        this.middleware()
    }

    private middleware(){
        this.server.use(this.router);
    }
}
