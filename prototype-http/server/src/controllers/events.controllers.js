const events_db = [];

const getEvents = (ctx) => {
    ctx.body = events_db;
    ctx.status = 200;
};

const addEvent = (ctx) => {
    events_db.push(ctx.request.body);
    ctx.body = "Event Created!";
    ctx.status = 201;
};

const helloWorld = (ctx) => {
    ctx.body = "Hello World!";
    ctx.status = 200;
}

const sum = (ctx) => {
    const { arg1, arg2 } = ctx.request.body;
    const result = {
        sum: arg1 + arg2,
    }
    ctx.body = result;
    ctx.status = 200;
}

const divide = (ctx) => {
    const { arg1, arg2 } = ctx.params;
    if (arg2 === '0') {
        ctx.body = { error: "Division by zero" };
        ctx.status = 400;
    } else {
        const result = {
            div: arg1 / arg2,
        }
        ctx.body = result;
        ctx.status = 200;
    }
}

const multiply = (ctx) => {
    const { arg1, arg2 } = ctx.query;

    const result = {
        mult: arg1 * arg2,
    }
    ctx.body = result;
    ctx.status = 200;

}


export {
    getEvents,
    addEvent,
    helloWorld,
    sum,
    divide,
    multiply
};