const { test, describe } = require("node:test");
const assert = require("node:assert");
const listHelper = require("../utils/list_helper");
const { blogs } = require("./test_data");

describe("favorite blog", () => {
  test("when list has only one blog, returns that blog", () => {
    const singleBlog = [blogs[0]];
    const result = listHelper.favoriteBlog(singleBlog);

    assert.deepStrictEqual(result, blogs[0]);
  });

  test("when list has multiple blogs, returns the one with most likes", () => {
    const result = listHelper.favoriteBlog(blogs);

    // Blog at index 2 has 12 likes (the most)
    assert.deepStrictEqual(result, blogs[2]);
  });

  test("when list is empty, returns null", () => {
    const result = listHelper.favoriteBlog([]);
    assert.strictEqual(result, null);
  });
});
