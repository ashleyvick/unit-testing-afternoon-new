import { shortenText } from "../../src/utils/functions";
import { wordCount, attachUserName } from "../../server/utils";
import { shortText, longText, posts, users } from "./__data__/testData";

// Create a test for shortenText to make sure it will not alter a string under 100 characters
// use the .toHaveLength matcher and the shortText variable

test("shortenText should not alter a string under 100 characters", () => {
  expect(shortenText(shortText)).toHaveLength(29);
});
// Create a test for shortenText to make sure it shortens text over 100 characters and adds 3 periods at the end
// you will need two assertions in this test; one to check length and the second to see if the last 3 characters are ...
// use the .not matcher on this to compare original longText length vs the new length
test("shortenText should shorten text over 100 character and adds 3 periods at the end", () => {
  const shortened = shortenText(longText);
  expect(shortened).not.toHaveLength(longText.length);
  expect(shortened.slice(-3)).toBe("...");
});
//Write a test for wordCount that will check the posts array and return a total word count. The number of words in the posts array should equal 233
test("wordCount should sum up the number of words in an array full of posts", () => {
  expect(wordCount(posts)).toBe(233);
});
// Write a test for attachUserName that will check to see if the first post returned from running this function has a property displayName. Running this test will cause a failure since this function does not currently account for any posts that don't have a matching user.
// refactor this function to filter out all the posts with no users.
test("attachUserName should attach a users full name to post", () => {
  const newPost = attachUserName(users, posts);
  expect(newPost[0]).toHaveProperty("displayName");
});
// write a test for attachUserName to check that it removes any post with no matching user.
// The returned array should only contain posts that had a matching user
// You should not alter the original array passed in
test("attachUserName should remove post with no matching user", () => {
  const newPost = attachUserName(users, posts);
  const deletePost = posts[5];
  expect(newPost).not.toContainEqual(deletePost);
});
