const Koa = require('koa');
const app = new Koa();
const cors = require('@koa/cors');
const bodyparser = require('koa-bodyparser')
const PORT = 3000;

app.use(cors())
app.use(bodyparser)

app.listen((PORT) => {
    console.log(`server listening at ${PORT}`)
})