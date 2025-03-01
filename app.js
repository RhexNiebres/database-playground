const express = require ('express');
const app = express();
const usersRouter = require("./routes/userRouter");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/", usersRouter);

app.use((req, res, next) => {
    console.log("🔹 Incoming Request:", req.method, req.url);
    next();
  });

  
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`));
