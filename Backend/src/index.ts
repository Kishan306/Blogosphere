import { Hono } from "hono";
import userRoute from "../src/Router/userRoute";
import blogRoute from "./Router/blogRoute";
import { cors } from "hono/cors";
const app = new Hono();


//Routes
app.use('/*',cors());
app.route('/api/v1/user',userRoute);
app.route('/api/v1/blog',blogRoute);
export default app;
