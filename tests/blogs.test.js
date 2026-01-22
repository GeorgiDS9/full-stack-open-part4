const { test, describe } = require("node:test");
const assert = require("node:assert");
const listHelper = require("../utils/list_helper");
const { blogs } = require("./test_data");

test("dummy returns one", () => {
  const blogs = [];

  const result = listHelper.dummy(blogs);
  assert.strictEqual(result, 1);
});

describe("total likes", () => {
  test("of empty list is zero", () => {
    const result = listHelper.totalLikes([]);
    assert.strictEqual(result, 0);
  });

  test("when list has only one blog, equals blog's likes", () => {
    const result = listHelper.totalLikes([blogs[0]]);
    assert.strictEqual(result, 7);
  });

  test("of a bigger list is calculated right", () => {
    const result = listHelper.totalLikes(blogs);
    assert.strictEqual(result, 36);
  });

  describe("most blogs", () => {
    test("of empty list is null", () => {
      const result = listHelper.mostBlogs([]);
      assert.strictEqual(result, null);
    });

    test("when list has only one blog, returns that author with count 1", () => {
      const result = listHelper.mostBlogs([blogs[0]]);
      assert.deepStrictEqual(result, {
        author: "Michael Chan",
        blogs: 1,
      });
    });

    test("when list has multiple blogs, returns author with most blogs", () => {
      const result = listHelper.mostBlogs(blogs);
      assert.deepStrictEqual(result, {
        author: "Robert C. Martin",
        blogs: 3,
      });
    });

    test("when multiple authors have same count, returns any one of them", () => {
      const testBlogs = [
        { author: "Author A", title: "Blog 1", likes: 1 },
        { author: "Author B", title: "Blog 2", likes: 2 },
        { author: "Author A", title: "Blog 3", likes: 3 },
        { author: "Author B", title: "Blog 4", likes: 4 },
      ];
      const result = listHelper.mostBlogs(testBlogs);
      assert.strictEqual(result.blogs, 2);
      assert.ok(result.author === "Author A" || result.author === "Author B");
    });
  });
});
