

exports.usersListGet = (req, res) => {
  console.log("usernames will be logged here - wip");
  res.render("index", {title: 'users'});
};

exports.usersCreateGet = (req, res) => {
  res.render("createUser", {
    title: "Create user",
  });
};

exports.usersCreatePost = (req, res) => {
  console.log("username to be saved: ", req.body.username);
  res.redirect("/");
};

