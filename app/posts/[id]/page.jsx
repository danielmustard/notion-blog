import { NotionRenderer } from "react-notion";
import '../../../styles/blogpost.css'
import "prismjs/themes/prism-tomorrow.css";
async function getPageData(id){
    const res = await fetch(`https://notion-api.splitbee.io/v1/page/${id}`,{next:{revalidate:60}})
    return res.json();
}
const page = async ({params}) => {
    const pageData = await getPageData(params.id)
  return (
    <NotionRenderer blockMap={pageData}/>
  )
}

export default page;