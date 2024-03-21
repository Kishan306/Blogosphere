import { Hono } from "hono";

const blogRoute = new Hono<{
  Bindings: {
    JWT_SECRET: string;
    DATABASE_URL: string;
  };
}>();
blogRoute.post("/blog", (c) => {
  return c.text("hello");
});
blogRoute.get("/blog/:id", (c) => {
  return c.text("hello Bislla");
});
blogRoute.put("/blog", (c) => {
  return c.text("hello");
});

export default  blogRoute