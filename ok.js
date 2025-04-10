const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();
const router = new Router();
const Top250Model=require("./index.js");
const cors=require("koa2-cors");

router.get("/top250", async (ctx) => {
	var data=await Top250Model.find();
	console.log(data);
  ctx.body = {
	  code:200,
	  res:data,
	  msg:"GET/top250 success"
  }
});
app.use(cors());
app.use(router.routes());
app.listen(8080, () => {
  console.log("Server running on http://localhost:8080/top250");
});