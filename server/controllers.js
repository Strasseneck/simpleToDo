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
        // ctx.message = 'deleted todo'
    } catch (error) {
        console.log(error);
    }
}

exports.move = async (ctx) => {
    const id = ctx.params.id;
    const direction = ctx.params.direction;
    console.log(id, direction)
    const change = direction === 'up' ? 1 : -1
    try {
        const res = await ToDo.updateOne({_id: id}, {$inc: {priority: change}}, {new: true})
        ctx.status = 200;
        ctx.body = res;
    } catch (error) {
        console.log(error);
    }
}