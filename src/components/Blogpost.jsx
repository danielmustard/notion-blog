import { useState, useEffect } from 'react';


import '../static/css/blogpost.css'

import getAllPosts from './getAllPosts';

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
        <main>
            <div className="card">
                <img src={post.Preview_Image} alt="Card Image"></img>
                <h5>{post.Page}</h5>
                <p>{post.Preview}</p>
                <a href="#">Check it</a>
            </div>
        </main>
            
      ))}
    </div>
  );
}
