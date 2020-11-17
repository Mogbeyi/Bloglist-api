const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  return blogs.map((blog) => blog.likes).reduce((a, b) => a + b, 0);
};

const favoriteBlog = (blogs) => {
  const likes = blogs.map((blog) => blog.likes);
  const maxLikes = Math.max(...likes);

  return blogs.filter((blog) => blog.likes === maxLikes);
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
};
