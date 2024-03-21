import { Hono } from "hono";
import Auth from "../Router/userRoute";
import authMiddleware from "../Middlewares/middleware";
import blogRoute from "../Router/blogRoute";
const app = new Hono();


//Routes
app.route('/api/v1',Auth);
app.route('/api/v1',blogRoute);

//Middleware
app.route('/api/v1',authMiddleware)


//Blogging End Points


export default app;
