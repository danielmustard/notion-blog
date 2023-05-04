import { NotionRenderer } from "react-notion";
import '../../styles/blogpost.css'
import "prismjs/themes/prism-tomorrow.css";
async function getPageData(){
    const res = await fetch(`https://notion-api.splitbee.io/v1/page/7a8703ca1063490e9fb3d61bdba3a37f`,{next:{revalidate:60}})
    return res.json();
}
const page = async () => {
    const pageData = await getPageData()
  return (
    <NotionRenderer blockMap={pageData}/>
  )
}

export default page;