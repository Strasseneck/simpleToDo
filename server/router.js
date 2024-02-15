const Router = require('@koa/router');
const router = new Router();
const controller = require('./controllers')

router.get('/todos', controller.getAll)
router.post('/todos', controller.saveToDo)

module.exports = router;
