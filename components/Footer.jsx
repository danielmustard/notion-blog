import '../styles/footer.css'

import Link from "next/link";

import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
        <div className="iconGrid">
            <div className="githubIcon">
              <Link href={'https://github.com/danielmustard'} style={{margin:'0px',cursor:'pointer',padding:'0px'}}>
                <AiFillGithub/>
              </Link>
              
            </div>
        </div>
    </footer>
  )
}

export default Footer