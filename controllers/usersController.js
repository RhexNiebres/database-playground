const db = require("../db/queries");



async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map(user => user.username).join(", "));
}

async function createUsernameGet(req, res) {
  res.render("createUser", {
    title: "Create user",
  });
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

async function searchUsernames(req, res) {
  const searchTerm = req.query.q?.toLowerCase() || "";
  const usernames = await db.getAllUsernames();
  const filtered = usernames.filter(user => 
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );
  res.render("index", {
    title: "Users",
    usernames: filtered, 
  });
  res.json(filtered);
}
module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  searchUsernames,
};

