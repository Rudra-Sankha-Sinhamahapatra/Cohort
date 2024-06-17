import { OpenAPIHono } from '@hono/zod-openapi';
import { getUserRoute, postUserRoute } from './route';
import { swaggerUI } from '@hono/swagger-ui';

const app = new OpenAPIHono();


app.get('/ui',swaggerUI({url:"/doc"}));

app.openapi(getUserRoute,(c:any)=>{
const {id}=c.req.valid('param');
return c.json({
  id,
  age:20,
  name:"Jane doe",
})
})

app.openapi(postUserRoute,(c:any)=>{
  const {id}=c.req.valid('param');
  return c.json({
    id,
    age:20,
    name:"Jane doe",
  })
  })

app.doc('/doc',{
  openapi:'3.0.0',
  info:{
    version:"1.0.0",
    title:"My HonoOpenAPi App"
  }
})

export default app
