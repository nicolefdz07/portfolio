// import { motion } from "framer-motion";
// import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

// import "react-vertical-timeline-component/style.min.css";
// import { styles } from "../styles";
// import {experiences} from '../constants'
// import { SectionWrapper } from "../hoc";
// import { textVariant } from "../utils/motion";

// type Experience = {
//     title: string;
//     company_name: string;
//     icon: any;
//     iconBg: string;
//     date: string;
//     points: string[];
// }
// const ExperienceCard = ({experience}: {experience: Experience}) => {
//   return (
//     <VerticalTimelineElement
//       contentStyle={{ background: '#1d1836', color: '#fff' }}
//       contentArrowStyle={{ borderRight: '7px solid #232631' }}
//       date={experience.date}
//       iconStyle={{ background: experience.iconBg }}
//     >
//       <h3>{experience.title}</h3>
//       <p>{experience.company_name}</p>
//     </VerticalTimelineElement>
//   );
// };


// const Experience = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>
//         {/* <p className={styles.sectionSubText}>Introduction</p> */}
//         <h2 className={styles.sectionHeadText}>Education.</h2>
//       </motion.div>

//       <div className="mt-20 flex flex-col">
//         <VerticalTimeline>
//           {experiences.map((experience: Experience, index: number) => (
//             <ExperienceCard key={index} experience={experience} />
//           ))}
//         </VerticalTimeline>
//       </div>
//     </>
//   );
// };

// export default SectionWrapper(Experience, "work");
