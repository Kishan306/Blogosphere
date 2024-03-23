import { Hono } from "hono";
import { Jwt } from "hono/utils/jwt";

const authMiddleware = new Hono<{
    Bindings:{
        JWT_SECRET:string
    }
}>();

authMiddleware.use('/blog/*',async (c,next)=>{
    const header = c.req.header('Authorization') || " ";
    const token = header.split(' ')[1];
    const payload = await Jwt.verify(token,c.env.JWT_SECRET);
    if(payload.id){
      await next();
    }else{
      c.status(403);
      return c.json({
        error:"unAuthorized Access"
      })
    }
})

export default authMiddleware;