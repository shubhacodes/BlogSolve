import type { NextApiRequest, NextApiResponse } from "next";
import getPostMetadata from "../../../components/getPostMetadata";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Check if req.url is defined
    if (!req.url) {
      // Handle the case where URL is undefined
      return Response.json({ error: "Missing URL" });
    }
    // Create a URL object
    const url = new URL(req.url);

    // Use URLSearchParams to access the query parameters
    const params = new URLSearchParams(url.search);

    // Get individual parameters
    const month = params.get("month");
    const topic = params.get("topic");

    const posts = getPostMetadata();
    console.log(posts);

    // Function to filter the posts based on the metadata
    const filteredPosts = posts.filter((post) => {
      const monthMatch = month ? post.month === month : true;
      const topicMatch = topic ? post.topic === topic : true;
      return monthMatch && topicMatch;
    });

    return Response.json(filteredPosts, {
      status: 200,
    });
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch posts" },
      {
        status: 500,
      }
    );
  }
}
