import { motion } from 'framer-motion';
import { getDayState, getPromotion, hasBeenOpened } from '../utils/calendar';

export default function CalendarCard({
  day,
  currentDay,
  currentMonthName,
  currentYear,
  today,
  openedDays,
  onCardClick,
  index,
}) {
  const state = getDayState(day, currentDay);
  const promotion = getPromotion(day, currentMonthName, currentYear);
  const isPast = state === "past";
  const isCurrent = state === "current";
  const isFuture = state === "future";
  const hasBeenOpenedToday = hasBeenOpened(day, today, openedDays);

  let cardClasses = "panorama-card ";

  if (isCurrent) {
    cardClasses += "cursor-pointer";
  } else if (isPast) {
    cardClasses += "cursor-pointer";
  } else {
    cardClasses += "cursor-not-allowed";
  }

  let badgeStyleObj = {};
  if (isCurrent) {
    badgeStyleObj = {
      background: "linear-gradient(135deg, rgba(255, 215, 0, 1) 0%, rgba(255, 255, 100, 1) 50%, rgba(255, 215, 0, 1) 100%)",
      color: "#d11e3a",
      width: "48px",
      height: "48px",
      borderRadius: "14px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 900,
      fontSize: "20px",
      boxShadow: "0 8px 20px rgba(255, 215, 0, 0.6), 0 0 30px rgba(255, 215, 0, 0.4), inset 0 2px 8px rgba(255, 255, 255, 0.9), inset 0 -2px 8px rgba(0, 0, 0, 0.2)",
      border: "2.5px solid rgba(255, 255, 255, 0.8)",
      transform: "rotate(-5deg)",
    };
  } else if (isPast) {
    badgeStyleObj = {
      background: "linear-gradient(135deg, rgba(100, 120, 140, 0.9) 0%, rgba(120, 140, 160, 0.9) 100%)",
      color: "white",
      width: "42px",
      height: "42px",
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 800,
      fontSize: "17px",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.5), inset 0 2px 6px rgba(255, 255, 255, 0.3), inset 0 -2px 6px rgba(0, 0, 0, 0.3)",
      border: "2px solid rgba(150, 150, 170, 0.5)",
    };
  } else {
    badgeStyleObj = {
      background: "linear-gradient(135deg, rgba(60, 60, 80, 0.8) 0%, rgba(40, 40, 60, 0.8) 100%)",
      color: "rgba(255, 255, 255, 0.4)",
      width: "42px",
      height: "42px",
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 800,
      fontSize: "17px",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.6), inset 0 2px 6px rgba(255, 255, 255, 0.1), inset 0 -2px 6px rgba(0, 0, 0, 0.4)",
      border: "2px solid rgba(80, 80, 100, 0.4)",
    };
  }


  let content = "";
  if (isFuture) {
    content = (
      <div className="text-center flex flex-col items-center justify-center h-full">
        <div className="relative mb-5">
          <div
            className="w-24 h-24 mx-auto rounded-2xl backdrop-blur-md flex items-center justify-center border-2 border-white/10"
            style={{
              background:
                "linear-gradient(135deg, rgba(60, 60, 80, 0.7) 0%, rgba(40, 40, 60, 0.7) 100%)",
              boxShadow:
                "0 10px 25px rgba(0, 0, 0, 0.5), inset 0 2px 8px rgba(255, 255, 255, 0.1)",
            }}
          >
            <div className="text-5xl sm:text-6xl">🔒</div>
          </div>
          <div className="absolute -top-2 -right-2 flex gap-1">
            <span className="text-sm opacity-40">🔐</span>
          </div>
          <div className="absolute -bottom-2 -left-2 text-sm opacity-30">⏰</div>
        </div>
        <div className="mb-4">
          <p className="text-lg sm:text-xl text-white/70 font-black uppercase tracking-widest mb-2" style={{textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)"}}>
            Come Tomorrow!
          </p>
          <p className="text-xs text-white/50 font-semibold mb-3">
            {currentMonthName} {day}
          </p>
          <div className="bg-gradient-to-r from-red-500/20 via-red-400/15 to-red-500/20 rounded-xl p-3 border border-red-400/30 backdrop-blur-sm">
            <p className="text-xs sm:text-sm text-white/90 font-bold mb-1">🎁 Special Offer Awaits You!</p>
            <p className="text-[10px] sm:text-xs text-white/75 leading-tight">Free spins and exclusive bonuses tomorrow!</p>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm opacity-50 animate-pulse">🎰</span>
          <span className="text-xs text-white/60 font-semibold">Come back tomorrow for bonus</span>
          <span className="text-sm opacity-50 animate-pulse delay-500">💎</span>
        </div>
      </div>
    );
  } else if (isPast) {
    content = (
      <div className="flex-1 flex flex-col justify-between min-h-0">
        <div className="text-center flex-1 flex flex-col justify-center">
          <div className="relative inline-block mb-4">
            <div
              className="w-20 h-20 mx-auto rounded-2xl backdrop-blur-md flex items-center justify-center border-2 border-white/20"
              style={{
                background:
                  "linear-gradient(135deg, rgba(100, 120, 140, 0.5) 0%, rgba(60, 80, 100, 0.5) 100%)",
                boxShadow:
                  "0 8px 20px rgba(0, 0, 0, 0.4), inset 0 2px 8px rgba(255, 255, 255, 0.15)",
              }}
            >
              <svg
                className="w-10 h-10 text-white/90"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="absolute -top-2 -right-2 text-base opacity-70">
              ✅
            </div>
          </div>
          <div className="mb-3">
            <p className="text-sm sm:text-base text-white font-black uppercase tracking-widest mb-1" style={{textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)"}}>
              Bonus Claimed
            </p>
            <p className="text-xs text-white/70 font-semibold">
              {currentMonthName} {day}
            </p>
          </div>
        </div>
        <div className="flex-shrink-0 mt-4">
          <div className="bg-gradient-to-r from-red-500/20 via-red-400/15 to-red-500/20 rounded-xl p-4 border border-red-400/30 backdrop-blur-sm">
            <p className="text-[9px] uppercase tracking-widest mb-2 text-white/70 font-semibold flex items-center gap-1 justify-center">
              <span>🎴</span>
              <span>Was:</span>
              <span>🎴</span>
            </p>
            <div className="mb-2">
              <p className="text-xs sm:text-sm text-white/90 font-bold mb-1">{promotion.discount || "Bonus"}</p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-red-900/30 via-red-800/20 to-red-900/30 backdrop-blur-md rounded-xl p-3 border-2 border-red-500/40 shadow-lg">
                <div className="font-mono text-sm sm:text-base font-bold tracking-widest text-center text-white/70 line-through">
                  {promotion.code}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    content = (
      <div className="flex-1 flex flex-col justify-between min-h-0">
        {/* Top Section with Discount */}
        <div className="flex-shrink-0">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                <span className="text-xl animate-pulse">🎰</span>
              </div>
              <span className="text-xs font-black text-white uppercase tracking-widest">
                Casino Bonus
              </span>
            </div>
            <div className="flex gap-1">
              <span className="text-sm animate-pulse">✨</span>
              <span className="text-sm">💎</span>
              <span className="text-sm animate-pulse delay-500">✨</span>
            </div>
          </div>
          <div className="relative mb-3">
            <div className="text-3xl sm:text-4xl font-black text-white mb-1" style={{textShadow: "0 0 30px rgba(255, 255, 255, 0.3), 0 4px 10px rgba(0, 0, 0, 0.3)"}}>
              {promotion.discount || "Special"}
            </div>
            <div className="absolute -top-2 -right-2 text-lg animate-bounce">🎄</div>
            <div className="absolute -bottom-1 -left-1 text-base opacity-60 animate-pulse">⭐</div>
          </div>
        </div>
        
        {/* Content Section */}
        <div className="flex-1 flex flex-col justify-center min-h-0 my-3">
          <h3 className="text-sm sm:text-base font-bold mb-2 line-clamp-2 text-white leading-tight" style={{textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)"}}>
            {promotion.title}
          </h3>
          <p className="text-xs text-white/85 leading-relaxed line-clamp-3">
            {promotion.description}
          </p>
        </div>
        
        {/* Promo Code Section */}
        <div className="flex-shrink-0 pt-3 border-t border-white/10">
          <div className="relative">
            <p className="text-[9px] uppercase tracking-widest mb-2 text-white/60 font-semibold flex items-center gap-1 justify-center">
              <span>🎴</span>
              <span>Promo Code</span>
              <span>🎴</span>
            </p>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/40 via-yellow-400/30 to-yellow-600/40 rounded-xl blur-md animate-pulse"></div>
              <div className="relative bg-gradient-to-br from-yellow-900/30 via-yellow-800/20 to-yellow-900/30 backdrop-blur-md rounded-xl p-3 border-2 border-yellow-500/50 shadow-2xl">
                <div className="font-mono text-xl sm:text-2xl font-black tracking-widest text-center">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-100 to-yellow-300" style={{textShadow: "0 0 20px rgba(234, 179, 8, 0.4)"}}>
                    {promotion.code}
                  </span>
                </div>
              </div>
              <div className="absolute -top-1 -right-1 text-xs animate-bounce">🎁</div>
              <div className="absolute -bottom-1 -left-1 text-xs animate-pulse delay-500">💎</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Parse cardStyle into React style object
  const cardStyleObj = {};
  if (isCurrent) {
    cardStyleObj.background = "linear-gradient(135deg, rgba(209, 30, 58, 0.95) 0%, rgba(235, 39, 67, 0.95) 50%, rgba(201, 26, 53, 0.95) 100%)";
    cardStyleObj.backdropFilter = "blur(20px)";
    cardStyleObj.boxShadow = "0 30px 60px -12px rgba(235, 39, 67, 0.7), 0 0 80px rgba(235, 39, 67, 0.4), inset 0 0 40px rgba(255, 255, 255, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3)";
    cardStyleObj.border = "2px solid rgba(255, 255, 255, 0.3)";
  } else if (isPast) {
    cardStyleObj.background = "linear-gradient(135deg, rgba(42, 45, 58, 0.85) 0%, rgba(31, 34, 48, 0.85) 50%, rgba(37, 40, 54, 0.85) 100%)";
    cardStyleObj.backdropFilter = "blur(20px)";
    cardStyleObj.boxShadow = "0 25px 50px -12px rgba(0, 0, 0, 0.7), inset 0 0 30px rgba(100, 120, 140, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)";
    cardStyleObj.border = "1.5px solid rgba(150, 150, 170, 0.3)";
  } else {
    cardStyleObj.background = "linear-gradient(135deg, rgba(31, 34, 48, 0.75) 0%, rgba(37, 40, 54, 0.75) 50%, rgba(26, 29, 40, 0.75) 100%)";
    cardStyleObj.backdropFilter = "blur(20px)";
    cardStyleObj.boxShadow = "0 20px 40px -12px rgba(0, 0, 0, 0.8), inset 0 0 20px rgba(60, 60, 80, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.05)";
    cardStyleObj.border = "1.5px solid rgba(100, 100, 120, 0.2)";
  }
  cardStyleObj.borderRadius = "24px";
  cardStyleObj.overflow = "hidden";
  cardStyleObj.position = "relative";

  // Set panorama positioning using CSS variables
  if (index === 0) {
    cardStyleObj['--panorama-x'] = '-0px';
    cardStyleObj['--panorama-rotate'] = '30deg';
    // Mobile vertical panorama
    cardStyleObj['--panorama-y'] = '20px';
    cardStyleObj['--panorama-rotate-vertical'] = '-30deg';
  } else if (index === 1) {
    cardStyleObj['--panorama-x'] = '0px';
    cardStyleObj['--panorama-rotate'] = '0deg';
    // Mobile vertical panorama
    cardStyleObj['--panorama-y'] = '0px';
    cardStyleObj['--panorama-rotate-vertical'] = '0deg';
  } else if (index === 2) {
    cardStyleObj['--panorama-x'] = '20px';
    cardStyleObj['--panorama-rotate'] = '-30deg';
    // Mobile vertical panorama
    cardStyleObj['--panorama-y'] = '-20px';
    cardStyleObj['--panorama-rotate-vertical'] = '30deg';
  }

  // Animation variants based on card position
  const cardVariants = {
    hidden: (index) => {
      if (index === 1) {
        // Center card - appears first
        return {
          opacity: 0,
          scale: 0.8,
          z: -30,
        };
      } else if (index === 0) {
        // Past card - slides in from left (desktop) or top (mobile)
        return {
          opacity: 0,
          x: -150, // Desktop: from left
          y: 0,
          rotateY: 45,
          rotateX: 0,
          scale: 0.7,
        };
      } else {
        // Future card - slides in from right (desktop) or bottom (mobile)
        return {
          opacity: 0,
          x: 150, // Desktop: from right
          y: 0,
          rotateY: -45,
          rotateX: 0,
          scale: 0.7,
        };
      }
    },
    visible: (index) => {
      if (index === 1) {
        return {
          opacity: 1,
          scale: 1,
          z: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut",
          },
        };
      } else {
        return {
          opacity: isPast ? 0.85 : 0.85,
          x: index === 0 ? 20 : -20, // Final position
          y: 0,
          rotateY: index === 0 ? 30 : -30,
          rotateX: 0,
          scale: 0.9,
          transition: {
            duration: 0.8,
            ease: "easeOut",
            delay: index === 0 ? 0.4 : 0.6,
          },
        };
      }
    },
  };

  const pulseVariants = {
    animate: {
      boxShadow: [
        "0 25px 50px -12px rgba(235, 39, 67, 0.6), 0 0 60px rgba(30, 58, 138, 0.3), inset 0 0 30px rgba(255, 255, 255, 0.1)",
        "0 35px 70px -12px rgba(235, 39, 67, 0.8), 0 0 80px rgba(30, 58, 138, 0.5), inset 0 0 40px rgba(255, 255, 255, 0.15)",
        "0 25px 50px -12px rgba(235, 39, 67, 0.6), 0 0 60px rgba(30, 58, 138, 0.3), inset 0 0 30px rgba(255, 255, 255, 0.1)",
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.8,
      },
    },
  };

  // Add animation classes for CSS fallback (for panorama positioning)
  let finalCardClasses = cardClasses + " card-light-effect";
  
  if (index === 1) {
    // Center card (current day) - appears first
    finalCardClasses += " panorama-card-center";
    if (isCurrent) {
      finalCardClasses += " card-pulse-animation";
    }
  } else if (index === 0) {
    // Past card - slides in from left/top
    finalCardClasses += " panorama-card-past";
  } else if (index === 2) {
    // Future card - slides in from right/bottom
    finalCardClasses += " panorama-card-future";
  }

  return (
    <motion.div
      className={finalCardClasses}
      style={cardStyleObj}
      onClick={() => onCardClick(day)}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        scale: 1.02,
        z: 50,
        transition: { duration: 0.4, type: "spring", stiffness: 300, damping: 20 },
      }}
    >
      <motion.div
        className="panorama-card-content group relative rounded-3xl overflow-hidden h-full"
        animate={index === 1 && isCurrent ? pulseVariants.animate : {}}
      >
        {/* Animated Background Glow */}
        {isCurrent && (
          <motion.div
            className="absolute inset-0"
            style={{ background: "radial-gradient(circle at center, rgba(255, 215, 0, 0.2) 0%, transparent 70%)" }}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          />
        )}
        {/* Shimmer Effect */}
        {isCurrent && (
          <motion.div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.1) 50%, transparent 100%)",
              backgroundSize: "200% 200%",
            }}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            animate={{
              backgroundPosition: ["-200% 0", "200% 0"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        )}
        {/* Decorative Corner Accents */}
        {isCurrent && (
          <>
            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-yellow-400/20 to-transparent rounded-br-full"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-yellow-400/20 to-transparent rounded-tl-full"></div>
          </>
        )}
        <div className="absolute top-5 right-5 z-20" style={badgeStyleObj}>
          <span className="relative z-10">{day}</span>
        </div>
        <div className="relative z-10 p-6 sm:p-7 pt-20 h-full flex flex-col">
          {content}
        </div>
        {/* Bottom Accent Line */}
        {isCurrent && (
          <motion.div
            className="absolute bottom-0 left-0 w-full h-1.5"
            style={{ background: "linear-gradient(to right, transparent, rgba(255, 215, 0, 0.6), transparent)" }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}

