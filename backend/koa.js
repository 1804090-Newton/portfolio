const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');


const app = new Koa();
const router = new Router();


app.use(cors());


app.use(bodyParser());


router.post('/contact', async (ctx) => {
  const { firstName, lastName, contactNumber, email, message } = ctx.request.body;
  
  
  console.log('Form Data:', {
    firstName,
    lastName,
    contactNumber,
    email,
    message
  });

  ctx.status = 201;
  ctx.body = { message: 'Contact form submitted successfully' };
});


app.use(router.routes());
app.use(router.allowedMethods());

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
