"use client";
import { useEffect, useState } from "react";
import PostPreview from "../components/PostPreview";
import { PostMetadata } from "../components/PostMetadata";

const HomePage = () => {
  const [postMetadata, setPostMetadata] = useState<PostMetadata[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<PostMetadata[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<string>("");
  const [selectedTopic, setSelectedTopic] = useState<string>("");

  const topics = ["Binary Search", "Tree", "Two Pointers", "Dynamic Programming", "Backtracking", "Hashing"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  useEffect(() => {
    const fetchData = async () => {
      let url = "/api/posts";
      const params = new URLSearchParams();
      if (selectedMonth) params.append("month", selectedMonth);
      if (selectedTopic) params.append("topic", selectedTopic);
      if (params.toString()) url += `?${params.toString()}`;

      const response = await fetch(url, { method: "GET" });
      const data: PostMetadata[] = await response.json();
      setPostMetadata(data);
      setFilteredPosts(data);
    };
    fetchData();
  }, [selectedMonth, selectedTopic]);

  // Dropdown handlers
  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(e.target.value);
  };

  const handleTopicChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTopic(e.target.value);
  };

  return (
    <div>
      <div className="filters">
        <select onChange={handleMonthChange} value={selectedMonth}>
          <option value="">Filter by month</option>
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>

        <select onChange={handleTopicChange} value={selectedTopic}>
          <option value="">Filter by topic</option>
          {topics.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => <PostPreview key={post.slug} {...post} />)
        ) : (
          <p className="text-center">No posts found.</p>
        )}
      </div>
    </div>
  );
};

export default HomePage;
