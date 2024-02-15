const ToDo = require('./models')

exports.getAll = async (ctx) => {
    try {
        const res = await ToDo.find({})
        ctx.status = 200;
        ctx.body = res;
    } catch (error) {
        console.log(error);
    }
}

exports.saveToDo = async (ctx) => {
    try {
        const res = await ToDo.create(ctx.request.body);
        ctx.status = 200;
        ctx.body = 'ToDo saved'
    } catch (error) {
        console.log(error);
    }
}