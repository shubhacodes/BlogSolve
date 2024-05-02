import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "./PostMetadata";

const getPostMetadata = (): PostMetadata[] => {
  console.log("I can get herr");
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));
  console.log("I can get herr");
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      topic: matterResult.data.topic,
      slug: fileName.replace(".md", ""),
      month: matterResult.data.month,
    };
  });
  console.log("I can get final");
  return posts;
};
export default getPostMetadata;
