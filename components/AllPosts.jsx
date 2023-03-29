'use client';
//This component fetches all posts stored inside the notion database and renders them out for the user to interact with
import { useState, useEffect } from "react";

import Link from "next/link";

//importing styles
import "@/styles/all-posts.css"

//function that makes the API call
import getAllPosts from "./getAllPosts";

//function that returns tag style to render
import TagRender from "./TagRender";

export default function AllPosts() {

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
              {/* <Link href={"/posts/"+ post.id}>Read More</Link> */}

              <Link href={`/posts/${post.id}`}>Read More</Link>

              {/* <Link href={{
                pathname: '/posts/',
                query: {post: post.id}
              }} style={{color:"#ff0000"}}>Read More</Link> */}
              
              
              {/* <a className='read-more' href={"/posts/" + post.id}>Read more</a> */}
              <TagRender data={post.Tags}/>
              <hr></hr>
            </div>
          </main>
        ))}
      </div>
    );
  }
