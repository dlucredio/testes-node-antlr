import Router from "koa-router";
import { getEvents, addEvent } from './controllers/events.controllers.js';

const router = new Router();

router.get("/events_list", getEvents);
router.post("/add_event", addEvent);

export default router;