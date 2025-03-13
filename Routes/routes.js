const { Router } = require("express");

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];

const userRouter = Router();

userRouter.get("/", (req, res) => res.render("index", { messages }));
userRouter.get("/new", (req, res) => res.render("form"));
userRouter.post("/new", (req , res) => {
    const {text, user} = req.body;
    messages.push({text, user, added: new Date()});
    res.redirect("/");
})
module.exports = userRouter;