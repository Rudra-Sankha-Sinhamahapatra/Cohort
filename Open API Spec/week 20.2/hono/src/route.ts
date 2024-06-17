import { createRoute } from '@hono/zod-openapi';
import { paramSchema } from './inputs';
import { userSchema } from './outputs';

export const getUserRoute=createRoute({
  method:"get",
path:"/user/{id}",
request:{
  params:paramSchema
},
responses:{
200:{
  content:{
    'application/json':{
      schema:userSchema,
    },
  },
  description:"Retrieve the User"
}
}
})

export const postUserRoute=createRoute({
    method:"post",
  path:"/user/{id}",
  request:{
    params:paramSchema
  },
  responses:{
  200:{
    content:{
      'application/json':{
        schema:userSchema,
      },
    },
    description:"Retrieve the User"
  }
  }
  })