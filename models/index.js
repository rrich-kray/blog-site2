const { User, Post, Comment } = require("../../coders-cave/models");

User.hasMany(Post, {
  foreignKey: "post_id",
});

Post.belongsTo(User, {
  foreignKey: "post_id",
});

User.hasMany(Comment, {
  foreignKey: "comment_id",
});

Comment.belongsTo(User, {
  foreignKey: "comment_id",
});

Post.hasMany(Comment, {
  foreignKey: "comment_id",
});

Comment.belongsTo(Post, {
  foreignKey: "comment_id",
});
