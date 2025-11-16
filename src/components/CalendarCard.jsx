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
      background: "linear-gradient(135deg, rgba(255, 215, 0, 0.9) 0%, rgba(255, 255, 255, 0.95) 100%)",
      color: "#d11e3a",
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 900,
      fontSize: "18px",
      boxShadow: "0 4px 15px rgba(255, 215, 0, 0.5), inset 0 2px 5px rgba(255, 255, 255, 0.8), inset 0 -2px 5px rgba(0, 0, 0, 0.2)",
      border: "2px solid rgba(255, 255, 255, 0.6)",
    };
  } else if (isPast) {
    badgeStyleObj = {
      background: "linear-gradient(135deg, rgba(100, 120, 140, 0.8) 0%, rgba(80, 100, 120, 0.8) 100%)",
      color: "white",
      width: "36px",
      height: "36px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 800,
      fontSize: "16px",
      boxShadow: "0 3px 10px rgba(0, 0, 0, 0.4), inset 0 2px 5px rgba(255, 255, 255, 0.2)",
      border: "1.5px solid rgba(150, 150, 170, 0.4)",
    };
  } else {
    badgeStyleObj = {
      background: "linear-gradient(135deg, rgba(60, 60, 80, 0.7) 0%, rgba(40, 40, 60, 0.7) 100%)",
      color: "rgba(255, 255, 255, 0.5)",
      width: "36px",
      height: "36px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: 800,
      fontSize: "16px",
      boxShadow: "0 3px 10px rgba(0, 0, 0, 0.5), inset 0 2px 5px rgba(255, 255, 255, 0.1)",
      border: "1.5px solid rgba(80, 80, 100, 0.3)",
    };
  }


  let content = "";
  if (isFuture) {
    content = (
      <div className="text-center flex flex-col items-center justify-center h-full">
        <div className="relative mb-4">
          <div
            className="w-20 h-20 mx-auto rounded-full backdrop-blur-sm flex items-center justify-center border-2"
            style={{
              background:
                "linear-gradient(135deg, rgba(100, 100, 120, 0.6) 0%, rgba(60, 60, 80, 0.6) 100%)",
              borderColor: "rgba(150, 150, 170, 0.5)",
              boxShadow:
                "0 8px 20px rgba(0, 0, 0, 0.4), inset 0 2px 5px rgba(255, 255, 255, 0.1)",
            }}
          >
            <div className="text-4xl sm:text-5xl">🔒</div>
          </div>
          <div className="absolute -top-1 -right-1 flex gap-1">
            <span className="text-xs opacity-50">🔐</span>
          </div>
        </div>
        <div className="mb-2">
          <p className="text-sm sm:text-base text-white/60 font-black uppercase tracking-widest mb-1">
            Coming Soon
          </p>
          <p className="text-xs text-white/40 font-semibold">
            {currentMonthName} {day}
          </p>
        </div>
        <div className="flex items-center gap-2 mt-2">
          <span className="text-xs opacity-40">🎰</span>
          <span className="text-xs text-white/50 font-bold">Locked</span>
          <span className="text-xs opacity-40">💎</span>
        </div>
      </div>
    );
  } else if (isPast) {
    content = (
      <div className="flex-1 flex flex-col justify-center">
        <div className="text-center mb-4">
          <div className="relative inline-block mb-3">
            <div
              className="w-16 h-16 mx-auto rounded-full backdrop-blur-sm flex items-center justify-center border-2 border-white/20"
              style={{
                background:
                  "linear-gradient(135deg, rgba(100, 120, 140, 0.4) 0%, rgba(60, 80, 100, 0.4) 100%)",
                boxShadow:
                  "0 4px 15px rgba(0, 0, 0, 0.3), inset 0 2px 5px rgba(255, 255, 255, 0.1)",
              }}
            >
              <svg
                className="w-8 h-8 text-white/80"
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
            <div className="absolute -top-1 -right-1 text-sm opacity-60">
              ✅
            </div>
          </div>
          <div className="mb-2">
            <p className="text-sm sm:text-base text-white/90 font-black uppercase tracking-widest mb-1">
              Bonus Claimed
            </p>
            <p className="text-xs text-white/60 font-semibold">
              {currentMonthName} {day}
            </p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="text-center">
            <p className="text-[9px] uppercase tracking-widest mb-2 text-white/50 font-semibold flex items-center gap-1 justify-center">
              <span className="opacity-50">🎴</span>
              <span>Was: {promotion.discount || "Bonus"}</span>
              <span className="opacity-50">🎴</span>
            </p>
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-700/30 via-gray-600/20 to-gray-700/30 backdrop-blur-sm rounded-lg p-2 border border-white/10">
                <div className="font-mono text-sm font-bold tracking-widest text-center text-white/60 line-through">
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
      <>
        <div className="flex-1">
          <div className="mb-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl animate-pulse">🎰</span>
                <span className="text-xs font-black text-white/90 uppercase tracking-widest">
                  Casino Bonus
                </span>
              </div>
              <div className="flex gap-1">
                <span className="text-sm">✨</span>
                <span className="text-sm">💎</span>
                <span className="text-sm">✨</span>
              </div>
            </div>
            <div className="relative">
              <div className="text-3xl sm:text-4xl font-black text-white mb-2">
                {promotion.discount || "Special"}
              </div>
              <div className="absolute -top-1 -right-1 text-lg">🎄</div>
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-base sm:text-lg font-bold mb-2 line-clamp-2 text-white leading-tight">
              {promotion.title}
            </h3>
            <p className="text-xs text-white/80 leading-relaxed">
              {promotion.description}
            </p>
          </div>
        </div>
        <div className="mt-auto pt-4 border-t-2 border-white/20">
          <div className="relative">
            <p className="text-[9px] uppercase tracking-widest mb-2 text-white/70 font-semibold flex items-center gap-1 justify-center">
              <span>🎴</span>
              <span>Promo Code</span>
              <span>🎴</span>
            </p>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-blue-400/20 to-blue-600/30 rounded-xl blur-sm"></div>
              <div className="relative bg-gradient-to-br from-blue-900/20 via-blue-800/10 to-blue-900/20 backdrop-blur-sm rounded-xl p-3 border-2 border-blue-500/40 shadow-lg">
                <div className="font-mono text-xl sm:text-2xl font-black tracking-widest text-center">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-200 to-blue-300">
                    {promotion.code}
                  </span>
                </div>
              </div>
              <div className="absolute -top-1 -right-1 text-xs">🎁</div>
              <div className="absolute -bottom-1 -left-1 text-xs">💎</div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // Parse cardStyle into React style object
  const cardStyleObj = {};
  if (isCurrent) {
    cardStyleObj.background = "linear-gradient(135deg, #d11e3a 0%, #eb2743 50%, #c91a35 100%)";
    cardStyleObj.boxShadow = "0 25px 50px -12px rgba(235, 39, 67, 0.6), 0 0 60px rgba(255, 215, 0, 0.2), inset 0 0 30px rgba(255, 255, 255, 0.1)";
    cardStyleObj.border = "2px solid rgba(255, 255, 255, 0.2)";
  } else if (isPast) {
    cardStyleObj.background = "linear-gradient(135deg, #2a2d3a 0%, #1f2230 50%, #252836 100%)";
    cardStyleObj.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.6), inset 0 0 20px rgba(100, 120, 140, 0.1)";
    cardStyleObj.borderColor = "rgba(150, 150, 170, 0.2)";
    cardStyleObj.border = "2px solid rgba(150, 150, 170, 0.2)";
  } else {
    cardStyleObj.background = "linear-gradient(135deg, #1f2230 0%, #252836 50%, #1a1d28 100%)";
    cardStyleObj.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.7), inset 0 0 15px rgba(60, 60, 80, 0.1)";
    cardStyleObj.borderColor = "rgba(100, 100, 120, 0.15)";
    cardStyleObj.border = "2px solid rgba(100, 100, 120, 0.15)";
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
        {isCurrent && (
          <motion.div
            className="absolute inset-0"
            style={{ background: "rgba(245, 77, 95, 0.25)" }}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          />
        )}
        <div className="absolute top-4 right-4 z-10" style={badgeStyleObj}>
          <span className="relative z-10">{day}</span>
        </div>
        <div className="relative z-10 p-6 sm:p-7 pt-16 h-full flex flex-col justify-between">
          {content}
        </div>
        {isCurrent && (
          <motion.div
            className="absolute bottom-0 left-0 w-full h-1"
            style={{ background: "rgba(235, 39, 67, 0.5)" }}
          />
        )}
      </motion.div>
    </motion.div>
  );
}

