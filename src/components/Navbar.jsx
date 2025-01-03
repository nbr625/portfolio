import logo from "../assets/nicolasLogo.png"
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"

const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
      <img className="mx-2 w-16" src={logo} alt="logo" height="25px" width="25px" />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a
        href="https://www.linkedin.com/in/nicolas-berrizbeitia-658212b6/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/nbr625"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>

    </div>
  </nav>
};

export default Navbar;
