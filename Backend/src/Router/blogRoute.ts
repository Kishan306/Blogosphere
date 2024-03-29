import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import authMiddleware from "../Middlewares/middleware";

const blogRoute = new Hono<{
  Bindings: {
    JWT_SECRET: string;
    DATABASE_URL: string;
  };
}>();

// Middleware
blogRoute.route("/", authMiddleware);

// Routes
blogRoute.post("/", async (c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  });
  prisma.$extends(withAccelerate());
  const userId = c.get("jwtPayload");
  const blog = await prisma.post.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: userId,
    },
  });
  return c.json(blog);
});

blogRoute.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  });
  prisma.$extends(withAccelerate());

  try {
    const blogs = await prisma.post.findMany({
      select: {
          content: true,
          title: true,
          id: true,
          author: {
              select: {
                  name: true
              }
          }
      }
  });
    return c.json({
      blogs: blogs,
    });
  } catch (error) {
    return c.json({
      error:"Error while fetching blogs"
    })
  }
});

blogRoute.put("/", async (c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  });
  prisma.$extends(withAccelerate());
  const userId = c.get("jwtPayload");
  console.log(userId);
  console.log(body.id)

  try {
    await prisma.post.update({
      where: {
        id: body.id,
        authorId: userId,
      },
      data: {
        title: body.title,
        content: body.content,
      },
    });
    return c.text("Updated Blog");
  } catch (error) {
    console.log(error)
    return c.text("Blog Not Found");
  }
});

blogRoute.get("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  });
  prisma.$extends(withAccelerate());

  const blog = await prisma.post.findUnique({
    where: {
      id: c.req.param("id"),
    },
  });
  return c.json(blog);
});

blogRoute.post("/:id", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  });
  prisma.$extends(withAccelerate());
  const userId = c.get("jwtPayload");
  const postId = c.req.param("id");
  console.log(postId);
  console.log(userId);

  try {
    await prisma.post.delete({
      where: {
        id: postId,
        authorId: userId,
      },
    });
    return c.text("Deleted Blog");
  } catch (error) {
    return c.text("Blog Not Found");
  }
});

export default blogRoute;
