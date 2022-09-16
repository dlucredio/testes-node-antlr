import Router from "koa-router";
import { getEvents, addEvent, helloWorld, sum, divide, multiply } from './controllers/events.controllers.js';

const router = new Router();

router.get("/events_list", getEvents);
router.post("/add_event", addEvent);
router.get("/helloWorld", helloWorld);
router.post("/sum", sum);
router.get("/divide/:arg1/:arg2", divide);
router.get("/multiply", multiply);

export default router;