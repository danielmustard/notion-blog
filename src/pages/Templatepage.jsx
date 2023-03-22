import React, { useState, useEffect } from "react";
import axios from "axios";
import { NotionRenderer } from "react-notion";

import '../static/css/blogpost.css'

function Templatepage() {
  const [blocks, setBlocks] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(
        "https://notion-api.splitbee.io/v1/page/bd73f597-3a78-4a88-b323-5d28d64e625b"
      );
      setBlocks(response.data);
    }
    fetchData();
  }, []);

  return (
    <div className="notion-block">
        {blocks ? (
          <NotionRenderer blockMap={blocks} />
        ) : (
          <p>Loading...</p>
        )}
    </div>
  );
}

export default Templatepage;
