const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  name: String,
  passwordhash: String,
  blogs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Blog",
    },
  ],
});

userSchema.set("tojson", {
  transform: (document, returnedobject) => {
    returnedobject.id = returnedobject._id.tostring();
    delete returnedobject._id;
    delete returnedobject.__v;
    // the passwordhash should not be revealed
    delete returnedobject.passwordhash;
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
