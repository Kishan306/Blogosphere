import { Hono } from "hono";
import {  PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { sign } from "hono/jwt";

const authRoute = new Hono<
{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
      };
}>();


authRoute.post("signup", async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
    });
    prisma.$extends(withAccelerate());
  
    const body = await c.req.json();
  
    // Uploading the user in the database 
    const user = await prisma.user.create({
      data:{
        email:body.email,
        password: body.password,
        name:body.name
      }
    })
  
    if (!user) {
      return c.json({
        Error:"Error While Signing Up"
      })
    }
    const token = await sign({id:user.id},c.env.JWT_SECRET);
  
    return c.json({
      token:token
    })
  
  });
  
  authRoute.post("signin", async (c) => {
    const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
    });
    prisma.$extends(withAccelerate());
  
    const body = await c.req.json();
    try {
      const user = await prisma.user.findUnique({
        where: {
          email: body.email,
          password: body.password,
        },
      });
      if (!user) {
        c.status(403);
        return c.json({
          mes: "No user Found",
        });
      }
      const token = await sign({ id: user.id }, c.env.JWT_SECRET);
  
      return c.json({
        token: token,
      });
    } catch (e) {
      console.log(e);
      return c.json({
        mes: "Error Occured",
      });
    }
  });

export default authRoute;