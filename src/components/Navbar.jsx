import '../static/css/navbar.css'
function Navbar() {
  

    return (
      <nav className="mainNav">
        <div className="left">
            Daniel Mustard
            <span>Anything IT & Sofware Related</span> 
        </div>
        <div className="right">
          <ul>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/blog">Blog</a>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar
  