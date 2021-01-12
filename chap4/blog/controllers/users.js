const usersRouter = require("express").Router();
const User = require("../models/user");

usersRouter.get("/", async (request, response) => {
  const users = await User.find({});

  response.json(users);
});

usersRouter.post("/", async (request, response) => {
  const user = new User(request.body);
  const newUser = await user.save();

  response.status(201).json(newUser);
});

// blogsRouter.delete("/:id", async (request, response) => {
//   const result = await Blog.findByIdAndDelete(request.params.id);

//   response.status(204).end();
// });

// blogsRouter.put("/:id", async (request, response) => {
//   const body = request.body;

//   const blog = {
//     title: body.title,
//     author: body.author,
//     url: body.url,
//     likes: body.likes,
//   };

//   const result = await Blog.findByIdAndUpdate(request.params.id, blog, {
//     new: true,
//   });

//   response.json(result);
// });

module.exports = usersRouter;
