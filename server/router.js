const Router = require('@koa/router');
const router = new Router();
const controller = require('./controllers')

router.get('/todos', controller.getAll)
router.post('/todos', controller.saveToDo)
router.delete('/todos/:id', controller.deleteToDo)
router.put('/todos/:id/:direction', controller.move)

module.exports = router;
