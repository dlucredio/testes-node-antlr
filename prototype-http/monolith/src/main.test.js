import 'bla2';
import { a as a1, b as b1, c } from 'bla';

const {
    getEvents,
    addEvent,
    helloWorld,
    sum,
    divide,
    multiply
} = require('./util.js');

const event = {
    "name": "test event",
    "adultsOnly": false,
    "attendees": 100,
    "description": "test description"
};

test('Showing all events, but empty', () => {
    expect(getEvents()).toEqual([]);
});

test('Adding an event, should update the list', () => {
    addEvent(event);
    expect(getEvents()).toEqual([event]);

});

test('Testing hello world', () => {
    const x = helloWorld();
    expect(x).toEqual("Hello world!");
});

test('Testing sum', () => {
    let p1 = 30;
    let p2 = 2 + 2;
    const result = sum(p1, 4 + 5 + p2);
    expect(result).toEqual(43);
});

test('Testing divide by zero', () => {
    expect(() => divide(30, 0)).toThrow('Division by zero');
});

test('Testing divide by zero differently', () => {
    try {
        divide(30, 0);
        expect('').toEqual('Should have thrown exception');
    } catch (e) {
        expect(e).toBe('Division by zero');
    }
});

test('Testing normal division', () => {
    expect(divide(30, 1)).toEqual(30);
});

test('Testing normal multiplication', () => {
    expect(multiply(2, 2)).toEqual(4);
});

test('Testing combined functions', () => {
    const y = multiply(sum(2, 2), divide(30, 1));
    expect(y).toBe(120);
});
