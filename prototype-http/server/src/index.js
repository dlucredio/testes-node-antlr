import Koa from "koa";
import parser from "koa-bodyparser";
import cors from "@koa/cors";

import router from "./router.js";

const App = new Koa();
const port = 8000;

App.use(parser())
    .use(cors())
    .use(router.routes())
    .listen(port, () => {
        console.log(`Server listening at port ${port}`);
    });