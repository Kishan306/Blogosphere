import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Jwt } from 'hono/utils/jwt'
import { sign } from 'hono/jwt'

 const app = new Hono<{
  Bindings:{
    DATABASE_URL:string
    JWT_SECRET:string
  }
}>()

app.post("/api/v1/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  });
  prisma.$extends(withAccelerate());

  const body = await c.req.json();
  try {
    const user = await prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name:body.name
      },
    });
    const token = await Jwt.sign(
      {
        id: user.id,
      },
      c.env.JWT_SECRET
    );
    return c.json({
      token: token,
    });
  } catch (e) {
    console.log(e)
    return c.json({
      error: e,
    });
  }
});

app.post('/api/v1/signin',async (c)=>{
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
  });
  prisma.$extends(withAccelerate());

  const body =await c.req.json();
  try {
    const user = await prisma.user.findUnique({
      where:{
        email:body.email,
        password:body.password
      }
    })
    if(!user){
      c.status(403)
      return c.json({
        mes:"No user Found"
      });
    }
    const token = await sign({id:user.id},c.env.JWT_SECRET);
    
    return  c.json({
      token:token
    })
  } catch (e) {
    console.log(e)
    return c.json({
      mes:"Error Occured"
    })
  }
  
})
app.post('/api/v1/blog',(c)=>{
  return  c.text("hello")
})

app.get('/api/v1/blog/:id',(c)=>{
  return c.text("hello")
})

app.put('/api/v1/blog',(c)=>{
  return  c.text("hello")
})


export default app