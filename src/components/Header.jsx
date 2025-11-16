import { motion } from 'framer-motion';
import { monthNames, getCurrentDate } from '../utils/calendar';

export default function Header() {
  const today = getCurrentDate();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentDay = today.getDate();
  const currentMonthName = monthNames[currentMonth];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  const textGlowVariants = {
    animate: {
      textShadow: [
        "0 0 20px rgba(235, 39, 67, 0.5), 0 0 40px rgba(235, 39, 67, 0.3)",
        "0 0 30px rgba(235, 39, 67, 0.8), 0 0 60px rgba(235, 39, 67, 0.6)",
        "0 0 20px rgba(235, 39, 67, 0.5), 0 0 40px rgba(235, 39, 67, 0.3)",
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 1.5,
      },
    },
  };

  return (
    <motion.div
      className="text-center mb-8 sm:mb-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="inline-block mb-4 sm:mb-6" variants={itemVariants}>
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <motion.span
            className="text-4xl sm:text-5xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          >
            🎄
          </motion.span>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-2 sm:mb-3 relative text-white"
            style={{
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "-0.02em",
              fontWeight: 800,
              lineHeight: "1.1",
            }}
            variants={titleVariants}
            animate="visible"
          >
            <motion.span variants={textGlowVariants} animate="animate">
              #Promo Christmas
            </motion.span>
          </motion.h1>
          <motion.span
            className="text-4xl sm:text-5xl"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            🎁
          </motion.span>
        </div>
        <div className="relative">
          <div className="h-1.5 bg-gradient-to-r from-transparent via-red-400/60 to-transparent rounded-full mb-2"></div>
          <div className="h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full"></div>
          <div className="absolute left-1/2 -translate-x-1/2 -top-1 flex gap-2">
            <span className="text-xs opacity-60">✨</span>
            <span className="text-xs opacity-80">❄</span>
            <span className="text-xs opacity-60">✨</span>
          </div>
        </div>
      </motion.div>
      <motion.div className="mb-4 sm:mb-6" variants={subtitleVariants}>
        <div className="inline-flex items-center gap-2 mb-2 sm:mb-3">
          <motion.span
            className="text-sm sm:text-base"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            ✨
          </motion.span>
          <p
            className="text-lg sm:text-xl md:text-2xl font-bold text-white/90 uppercase tracking-widest"
            style={{ textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)" }}
          >
            Daily Casino Bonuses
          </p>
          <motion.span
            className="text-sm sm:text-base"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            ✨
          </motion.span>
        </div>
        <p
          id="subtitle"
          className="text-sm sm:text-base text-white/70 font-medium mb-3 sm:mb-4"
        >
          Discover exclusive casino bonuses every day in {currentMonthName}! 🎁
        </p>
      </motion.div>
      <motion.div
        id="dateInfo"
        className="inline-flex items-center gap-3 px-5 sm:px-7 py-3 sm:py-4 rounded-2xl border-2 shadow-xl relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, rgba(235, 39, 67, 0.9) 0%, rgba(209, 30, 58, 0.9) 100%)",
          borderColor: "rgba(255, 255, 255, 0.3)",
          boxShadow:
            "0 8px 25px rgba(235, 39, 67, 0.4), inset 0 2px 10px rgba(255, 255, 255, 0.1)",
        }}
        variants={badgeVariants}
        animate="visible"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="relative flex items-center gap-2 sm:gap-3">
          <span className="text-lg sm:text-xl">🎄</span>
          <span className="text-white text-sm sm:text-base font-bold uppercase tracking-wider">
            Today:
          </span>
          <span
            id="currentDate"
            className="text-white font-black text-base sm:text-lg md:text-xl"
            style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)" }}
          >
            {currentMonthName} {currentDay}, {currentYear}
          </span>
          <span className="text-lg sm:text-xl">🎁</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

