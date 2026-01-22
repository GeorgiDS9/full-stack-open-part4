const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  return blogs.reduce((sum, blog) => sum + blog.likes, 0);
};

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) {
    return null;
  }

  return blogs.reduce((max, blog) => {
    return blog.likes > max.likes ? blog : max;
  }, blogs[0]);
};

const mostBlogs = (blogs) => {
  if (blogs.length === 0) {
    return null;
  }

  // Count blogs per author
  const authorCounts = blogs.reduce((counts, blog) => {
    counts[blog.author] = (counts[blog.author] || 0) + 1;
    return counts;
  }, {});

  // Find the author with the most blogs
  const topAuthor = Object.keys(authorCounts).reduce((max, author) => {
    return authorCounts[author] > authorCounts[max] ? author : max;
  });

  return {
    author: topAuthor,
    blogs: authorCounts[topAuthor],
  };
};

const mostLikes = (blogs) => {
  if (blogs.length === 0) {
    return null;
  }

  // Sum likes per author
  const authorLikes = blogs.reduce((likes, blog) => {
    likes[blog.author] = (likes[blog.author] || 0) + blog.likes;
    return likes;
  }, {});

  // Find the author with the most likes
  const topAuthor = Object.keys(authorLikes).reduce((max, author) => {
    return authorLikes[author] > authorLikes[max] ? author : max;
  });

  return {
    author: topAuthor,
    likes: authorLikes[topAuthor],
  };
};

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
};
