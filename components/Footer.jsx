import '../styles/footer.css'

import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
        <div className="iconGrid">
            <div className="githubIcon">
                <i>
                    <AiFillGithub/>
                </i>
            </div>
        </div>
    </footer>
  )
}

export default Footer