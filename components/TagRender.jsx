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
            color: "#9BC4D2",
            icon: "☁️"            
        },
        Powershell:{
            color: "#ACDDDE",
            icon: "🐚"
        },
        NextJS:{
          color: "#E97451",
          icon: "🌱"
        },
        Homelab:{
          color: "#9F2B68",
          icon: "🏠"
        },
        Proxmox:{
          color: "#FA7000",
          icon: "🔸"
        }
    }
    return (
      <div className="tagContainer">
        {/* {console.log(tags)} */}
        {Object.values(tags).map((tag) => (
          <div
            className="tag"
            style={{ backgroundColor: styleColours[tag]?.color }}
            key={tag.icon}
          >
            <div className="child">
                
              <i>{styleColours[tag]?.icon}</i>
              <span>{tag}</span>
            </div>
          </div>
        ))}
      </div>
    );
  };