import { useState, useEffect } from 'react';


import '../static/css/all-posts.css'

import getAllPosts from './getAllPosts';

import TagRender from './TagRender';



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
      <h1 style={{height:100}}>Latest</h1>
      {Object.values(posts).map((post) => (
        <main style={{visibility: post.Published == false? 'hidden':'visible'}}>
          <div className="card">
            <div className="datetime">
              <time>{post.Date}</time>
            </div>
            <div className="title-preview">
              <h5>{post.Page}</h5>
              <p>{post.Preview}</p>
            </div>
            {/* <img src={post.Preview_Image} alt="Card Image"></img> */}
            <a className='read-more' href={"/post/" + post.id}>Read more</a>
            <TagRender data={post.Tags}/>
            <hr></hr>
          </div>
        </main>
      ))}
    </div>
  );
}
