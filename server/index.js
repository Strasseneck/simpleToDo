const Koa = require('koa');
const app = new Koa();
const cors = require('@koa/cors');
const bodyparser = require('koa-bodyparser')
const router = require('./router')
const PORT = 3000;


app
.use(cors())
.use(bodyparser())
.use(router.routes())
.use(router.allowedMethods());

app.listen(PORT);

console.log(`server listening at http:${PORT}`)