import { Hono } from "hono";
import Auth from "../Router/userRoute";
import blogRoute from "../Router/blogRoute";
const app = new Hono();


//Routes
app.route('/api/v1/user',Auth);
app.route('/api/v1/blog',blogRoute);
export default app;
