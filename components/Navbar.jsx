import '../styles/navbar.css'
function Navbar() {
    return (
      <nav className="mainNav">
        <div className="left">
            Daniel Mustard
            <span>Anything IT & Sofware Related</span> 
        </div>
        <div className="right">
          <ul>
            <a href="/" className='mainLink'>Home</a>
            <a href="/about" className='mainLink'>About</a>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar