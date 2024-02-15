const Router = require('@koa/router');
const router = new Router();

router.get('/todos', controller.getAll())
router.post('/todos', controller.saveToDo())

module.exports = router;
