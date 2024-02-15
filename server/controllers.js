const { ToDo } = require('./models')

exports.getAll = async (ctx) => {
    try {
        const res = await ToDo.find({});
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
        ctx.body = res;
    } catch (error) {
        console.log(error);
    }
}

exports.deleteToDo = async (ctx) => {
    console.log(ctx.params.id)
    try {
        const res = await ToDo.findByIdAndDelete(ctx.params.id);
        ctx.status = 200;
        ctx.message = 'deleted todo'
    } catch (error) {
        console.log(error);
    }
}