import { motion } from "framer-motion"

import { CiGlobe } from "react-icons/ci";
import { useTranslation } from "react-i18next";



const LanguageBtn = () => {
  const { i18n } = useTranslation();




  const toggleLanguage = ()=>{
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  }
  return (
    <button 
    onClick={toggleLanguage}
    className="relative flex 
    text-[14px] items-center gap-2 px-4 py-1 bg-linear-to-r from-blue-900 to-violet-900 hover:from-blue-600 hover:to-violet-600 rounded-full transition-colors duration-200 shadow-sm hover:shadow-md overflow-hidden"
    >
      
      {/* Globe icon */}
      <CiGlobe 
      className="text-md md:text-[16px] font-bold"/>

      {/* Animated Background  */}
      <motion.div
        key={`pulse-${i18n.language}`}
        initial={{ scale: 0, opacity: 0.5 }}
        animate={{ scale: 2, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute inset-0 rounded-full bg-primary"
      />

      {i18n.language.toUpperCase()}</button>
  )
}

export default LanguageBtn