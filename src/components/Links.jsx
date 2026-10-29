import { LuLinkedin } from "react-icons/lu";
import { IoLogoGithub } from "react-icons/io";
const SocialLinks = () => {
  return (
   <div className="flex items-center flex-start gap-6 mt-2 relative z-50 ">
      <a
        href='https://www.linkedin.com/in/nicole-fernandez-5896592b2'
        target="_blank"
        rel="noopener noreferrer"
        className="text-secondary hover:text-white transition-colors duration-200"
      >
        <LuLinkedin className="md:text-3xl text-2xl" />
      </a>

      <a
        href='https://github.com/nicolefdz07'
        target="_blank"
        rel="noopener noreferrer"
        className="text-secondary hover:text-white transition-colors duration-200"
      >
        <IoLogoGithub className="md:text-3xl text-2xl" />
      </a>
    </div>
  );
}

export default SocialLinks





