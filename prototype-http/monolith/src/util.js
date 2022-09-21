const events_db = [];

function getEvents() {
    return events_db;
}

const addEvent = (event) => {
    events_db.push(event);
};

const helloWorld = () => {
    return "Hello world!";
}

function sum(arg1, arg2) {
    return arg1 + arg2;
}

const divide = (arg1, arg2) => {
    if (arg2 === 0) {
        throw "Division by zero";
    } else {
        return arg1 / arg2;
    }
}

const multiply = (arg1, arg2) => arg1 * arg2

module.exports = {
    getEvents,
    addEvent,
    helloWorld,
    sum,
    divide,
    multiply
};