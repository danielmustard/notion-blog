export default async function getAllPosts() {
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