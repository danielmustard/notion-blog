import Link from "next/link";
import TagRender from "@/components/TagRender";
import '../styles/all-posts.css'
//function to retrive all post data from inside the blog database:
async function getAllPosts() {
  const NOTION_BLOG_ID = "02382c790ccb47aa8dd21892cdab2eb9"
  try {
    const response = await fetch(`https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`, {next:{revalidate:60}});
    const data = await response.json();
    //console.log(data) //uncomment this line if you want to see data returned from splitbee api
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
        <main key={post.id} style={{display: post.Published == undefined || false ? 'none':'block'}}>
          {/* if post is set to not be published the published status is not returned so we check for undefined*/}
          <div className="card" key={post.id}>
            <div className="datetime" key={post.id}>
              <time>{post.Date}</time>
              <h1>{post.Published}</h1>
            </div>
            <div className="title-preview" key={post.id}>
              <h5>{post.Page}</h5>
              <p>{post.Preview}</p>
            </div>
    
            
            <TagRender data={post.Tags}/>
            <Link href={`/posts/${post.id}`} className={"read-more"}>Read More</Link>
            <hr></hr>
          </div>
        </main>
      ))}
    </div>
  );
    
 }
 
 export default HomePage;