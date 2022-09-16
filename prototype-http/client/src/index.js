import fetch from 'node-fetch';

async function start() {
    const event = {
        "name": "test event",
        "adultsOnly": false,
        "attendees": 100,
        "description": "test description"
    };

    const sum = {
        "arg1": 12,
        "arg2": 20
    }

    let url = 'http://127.0.0.1:8000/events_list';
    console.log(`GET ${url}`);
    let result = await fetch(url);
    console.log(await result.json());

    url = 'http://127.0.0.1:8000/helloWorld';
    console.log(`GET ${url}`);
    result = await fetch(url);
    console.log(await result.json());

    url = 'http://127.0.0.1:8000/add_event';
    console.log(`POST ${url}`);
    result = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(event),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(await result.json());

    url = 'http://127.0.0.1:8000/events_list';
    console.log(`GET ${url}`);
    result = await fetch(url);
    console.log(await result.json());

    url = 'http://127.0.0.1:8000/sum';
    console.log(`POST ${url}`);
    result = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(sum),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    console.log(await result.json());

    url = 'http://127.0.0.1:8000/divide/20/0';
    console.log(`GET ${url}`);
    result = await fetch(url);
    console.log(await result.json());


    url = 'http://127.0.0.1:8000/divide/20/2';
    console.log(`GET ${url}`);
    result = await fetch(url);
    console.log(await result.json());

    url = 'http://127.0.0.1:8000/multiply?arg1=2&arg2=15';
    console.log(`GET ${url}`);
    result = await fetch(url);
    console.log(await result.json());
}

start();