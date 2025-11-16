import { motion } from 'framer-motion';

export default function Steps() {
  // Step Cards Data - matches standalone version
  const stepsData = [
    {
      number: 1,
      animationClass: "scroll-slide-left",
      delayClass: "scroll-delay-100",
      textMotionClass: "text-motion-delay-1",
      emoji: "🎁",
      title: "Open Daily Card",
      description: "Click on today's card to reveal your exclusive bonus offer",
      hoverColor: "group-hover:text-red-200",
      showBackgroundGlow: false,
    },
    {
      number: 2,
      animationClass: "scroll-scale-in",
      delayClass: "scroll-delay-200",
      textMotionClass: "text-motion-delay-2",
      emoji: "🎴",
      title: "Get Promo Code",
      description: "Receive your unique promo code for exclusive casino bonuses",
      hoverColor: "group-hover:text-yellow-200",
      showBackgroundGlow: true,
    },
    {
      number: 3,
      animationClass: "scroll-slide-right",
      delayClass: "scroll-delay-300",
      textMotionClass: "text-motion-delay-3",
      emoji: "🎰",
      title: "Claim Bonus",
      description: 'Click "Claim Bonus" to use your code and enjoy the rewards',
      hoverColor: "group-hover:text-yellow-200",
      showBackgroundGlow: true,
    },
  ];

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

  const cardVariants = {
    hidden: (index) => ({
      opacity: 0,
      x: index === 0 ? -50 : index === 2 ? 50 : 0,
      scale: index === 1 ? 0.8 : 1,
    }),
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="steps-section"
      className="relative z-10 w-full max-w-6xl mx-auto mt-20 sm:mt-24 mb-16 sm:mb-20 px-4 sm:px-6"
    >
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-3 mb-6">
          <motion.span
            className="text-3xl"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ✨
          </motion.span>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-black text-white"
            style={{
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "-0.02em",
              fontWeight: 800,
              textShadow: "0 4px 20px rgba(235, 39, 67, 0.4)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            How It Works
          </motion.h2>
          <motion.span
            className="text-3xl"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            ✨
          </motion.span>
        </div>
        <div className="relative inline-block">
          <div className="h-1.5 bg-gradient-to-r from-transparent via-red-400/25 to-transparent rounded-full w-40 mx-auto mb-2"></div>
          <div className="h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full w-32 mx-auto"></div>
        </div>
      </motion.div>

      <div className="relative overflow-visible">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 relative z-10 pt-8 pb-8"
          style={{ overflow: "visible" }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {stepsData.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative group"
              style={{ overflow: "visible" }}
              custom={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="relative backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl card-hover-lift step-card-enhanced"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(31, 41, 55, 0.4) 0%, rgba(17, 24, 39, 0.3) 50%, rgba(31, 41, 55, 0.4) 100%)",
                  boxShadow:
                    "0 20px 40px -12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1) inset",
                  overflow: "visible",
                }}
                whileHover={{
                  boxShadow: "0 30px 60px -12px rgba(235, 39, 67, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1) inset",
                }}
                transition={{ duration: 0.4 }}
              >
                {/* Animated Background Glow */}
                {step.showBackgroundGlow && (
                  <motion.div
                    className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gray-700/10 via-transparent to-gray-800/10"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                )}

                {/* Step Number Badge - Outside the card */}
                <motion.div
                  className="absolute -top-6 -left-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 flex items-center justify-center text-3xl font-black text-red-700 shadow-2xl border-4 border-white/60 z-20"
                  style={{
                    boxShadow:
                      "0 10px 30px rgba(255, 215, 0, 0.5), inset 0 2px 10px rgba(255, 255, 255, 0.8)",
                  }}
                  initial={{ rotate: -5 }}
                  whileHover={{ rotate: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <span className="relative z-10">{step.number}</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent rounded-2xl"></div>
                </motion.div>

                <div className="text-center mt-6 relative z-10">
                  <div className="relative inline-block mb-6">
                    <motion.div
                      className="text-5xl sm:text-6xl mb-2"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      {step.emoji}
                    </motion.div>
                    <motion.div
                      className="absolute -top-2 -right-2 text-2xl"
                      initial={{ opacity: 0 }}
                      whileHover={{
                        opacity: 1,
                        y: [0, -10, 0],
                      }}
                      transition={{
                        opacity: { duration: 0.5 },
                        y: { duration: 0.6, repeat: Infinity, ease: "easeInOut" },
                      }}
                    >
                      ✨
                    </motion.div>
                  </div>
                  <motion.h3
                    className={`text-2xl sm:text-3xl font-black text-white mb-4 ${step.hoverColor}`}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      textShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
                    }}
                    whileHover={{ color: step.hoverColor.includes("red") ? "#fecaca" : "#fef08a" }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.title}
                  </motion.h3>
                  <p
                    className="text-base sm:text-lg text-white/90 leading-relaxed font-medium"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute bottom-4 right-4 text-2xl"
                  initial={{ opacity: 0.2 }}
                  whileHover={{ opacity: 0.4 }}
                  transition={{ duration: 0.3 }}
                >
                  🎄
                </motion.div>
                <motion.div
                  className="absolute top-4 right-4 text-xl"
                  initial={{ opacity: 0.2 }}
                  whileHover={{ opacity: 0.4 }}
                  transition={{ duration: 0.3 }}
                >
                  ❄
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

