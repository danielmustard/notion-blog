import Link from "next/link";
import TagRender from "@/components/TagRender";
import '../styles/all-posts.css'
//function to retrive all post data from inside the blog database:
async function getAllPosts() {
  const NOTION_BLOG_ID = "02382c790ccb47aa8dd21892cdab2eb9"
  try {
    const response = await fetch(`https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const HomePage = async () => {
  const posts = await getAllPosts();
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

            <Link href={`/posts/${post.id}`} className={"read-more"}>Read More</Link>

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
 
 export default HomePage;