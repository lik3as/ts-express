import App from './app'
import router from './router'

new App(router).server.listen(8080, () => {
    console.log("Server connected");
});