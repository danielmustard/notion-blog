import React, { useState, useEffect } from "react";
import axios from "axios";
import { NotionRenderer } from "react-notion";

import '../static/css/blogpost.css'
import "prismjs/themes/prism-tomorrow.css";
const pageRenderID = document.URL.split("/post/")[1];

function Postrender() {
  const [blocks, setBlocks] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        `https://notion-api.splitbee.io/v1/page/${pageRenderID}`
      );
      setBlocks(response.data);
    }
    fetchData();
  }, []);

  return (
    <div className="notion-block">
        {blocks ? (
          <NotionRenderer blockMap={blocks}/>
        ) : (
          <p>Loading...</p>
        )}
    </div>
  );
}

export default Postrender;
