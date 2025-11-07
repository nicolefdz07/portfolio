import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { github } from "../assets";
import { projects } from "../constants";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { useTranslation } from "react-i18next";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full h-[600px] flex flex-col"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>

        {/* Live Demo Link */}
        <div className="mt-auto mx-2 flex gap-3">
          <div
            onClick={() => window.open(live_link, "_blank")}
            target="_blank"
            rel="noopener noreferrer"
            className="w-50 bg-linear-to-r from-blue-900 to-violet-900 hover:from-blue-600 hover:to-violet-600 text-white font-bold py-3 px-6 rounded-lg text-[14px] flex items-center justify-center gap-2 transition-all duration-300 shadow-lg"
          >
            🌐 Live Demo
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>{t("work.subtitle")}</p>
        <h2 className={`${styles.sectionHeadText}`}>{t("work.title")}</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {t("work.description")}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => {
    const { description, ...rest } = project;  
    const translationKey = `work.projects.${project.name
      .toLowerCase()
      .replace(/\s/g, "")}.description`;
    const translatedDescription = t(translationKey);

    return (
      <ProjectCard
        key={`project-${index}`}
        index={index}
        {...rest}  
        description={translatedDescription}  
      />
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
