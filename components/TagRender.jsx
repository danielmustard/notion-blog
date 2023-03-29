import '../styles/tags.css'
export default function TagRender(tags) {
    //an array of tags is passed in, based on this we return mini tag that is attached to each post.
    const styleColours = {
        Docker:{
            color: "#0db7ed",
            icon: "🐳"
        },
        Vite:{
            color: "#ffc61e",
            icon: "⚡"
        },
        Blog:{
            color: "#90ee90",
            icon: "✍️"
        },
        AzureAD:{
            color: "#F0FFFF",
            icon: "☁️"            
        },
        Powershell:{
            color: "#ACDDDE",
            icon: "🐚"
        }
    }
    return (
      <div className="tagContainer">
        {/* {console.log(tags)} */}
        {Object.values(tags).map((tag) => (
          <div
            className="tag"
            style={{ backgroundColor: styleColours[tag]?.color }}
          >
            <div className="child">
                #
              <i>{styleColours[tag]?.icon}</i>
              <span>{tag}</span>
            </div>
          </div>
        ))}
      </div>
    );
  };