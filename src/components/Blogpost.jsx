import { useState, useEffect } from 'react';

const NOTION_BLOG_ID = "02382c790ccb47aa8dd21892cdab2eb9"

async function getAllPosts() {
  try {
    const response = await fetch(`https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export default function Blog() {

  const [posts, setPosts] = useState({});

  useEffect(() => {
    async function fetchData() {
      const data = await getAllPosts();
      setPosts(data);
    }
    fetchData();
  }, []);

  return (
    <div className="posts">
      {Object.values(posts).map((post) => (
        <div key={post.id}>
          <h2>{post.Page}</h2>
          <p>{post.Preview}</p>
        </div>
      ))}
      {/* {posts !== {} && posts.forEach(post => {
          console.log(post)
        })} */}
    </div>
  );
}
