import { motion, AnimatePresence } from 'framer-motion';
import { getDayState, getPromotion } from '../utils/calendar';

export default function Modal({ selectedDay, currentDay, currentMonthName, currentYear, onClose }) {
  const state = selectedDay ? getDayState(selectedDay, currentDay) : null;
  const promotion = selectedDay ? getPromotion(selectedDay, currentMonthName, currentYear) : null;
  const isPast = state === "past";

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      {selectedDay && (
        <motion.div
          key="modal"
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              onClose();
            }
          }}
        >
          <motion.div
            className="bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-2xl max-w-lg w-full p-8 sm:p-10 relative border border-white/20"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {isPast ? (
            <>
              <motion.div
                className="text-4xl mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
              >
                ✅
              </motion.div>
              <div className="mb-6">
                <div
                  className="inline-block px-6 py-3 rounded-xl border-2 shadow-lg"
                  style={{
                    backgroundColor: "#eb2743",
                    borderColor: "rgba(255, 255, 255, 0.3)",
                  }}
                >
                  <span className="text-xl font-bold text-white">
                    Bonus Claimed
                  </span>
                </div>
              </div>
              <div className="bg-gradient-to-r from-red-50 to-white rounded-2xl p-6 mb-6 border-2 border-red-300/50 shadow-lg">
                <p className="text-sm text-gray-600 mb-2 font-medium uppercase tracking-wider">
                  This bonus was already claimed
                </p>
                <p className="text-xs text-gray-500">
                  You can only claim bonuses on their respective days
                </p>
              </div>
              <motion.button
                onClick={onClose}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg border-2 border-white/30"
                whileHover={{
                  background: "linear-gradient(to right, #dc2626, #b91c1c)",
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Close
              </motion.button>
            </>
          ) : (
            <>
              <motion.div
                className="relative mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <motion.span
                    className="text-5xl"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    🎰
                  </motion.span>
                  <motion.span
                    className="text-6xl"
                    animate={{ y: [0, -15, 0] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                  >
                    🎁
                  </motion.span>
                  <motion.span
                    className="text-5xl"
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  >
                    💎
                  </motion.span>
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-sm">✨</span>
                  <span className="text-xs font-black text-gray-700 uppercase tracking-widest">
                    Casino Christmas Bonus
                  </span>
                  <span className="text-sm">✨</span>
                </div>
              </motion.div>
              <div className="mb-6">
                <div
                  className="inline-block w-full px-6 py-4 rounded-2xl border-2 shadow-xl text-center"
                  style={{
                    background:
                      "linear-gradient(135deg, #eb2743 0%, #d11e3a 100%)",
                    borderColor: "rgba(255, 255, 255, 0.3)",
                  }}
                >
                  <div
                    className="text-3xl sm:text-4xl font-black text-white mb-1"
                    style={{
                      textShadow:
                        "0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 215, 0, 0.3)",
                    }}
                  >
                    {promotion?.discount || "Special Offer"}
                  </div>
                  <div className="text-xs text-white/90 font-semibold uppercase tracking-wider">
                    Exclusive Bonus
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                  {promotion?.title || "Special Bonus"}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center text-sm">
                  {promotion?.description || "Claim your exclusive bonus today!"}
                </p>
              </div>
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-blue-400/10 to-blue-600/20 rounded-2xl blur-md"></div>
                <div className="relative bg-gradient-to-br from-blue-900/30 via-blue-800/20 to-blue-900/30 rounded-2xl p-6 border-2 border-blue-500/60 shadow-2xl">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-lg">🎴</span>
                    <p className="text-sm text-gray-700 font-bold uppercase tracking-widest">
                      Your Promo Code
                    </p>
                    <span className="text-lg">🎴</span>
                  </div>
                  <div className="relative">
                    <div className="text-5xl sm:text-6xl font-black text-center mb-3">
                      <span
                        className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 font-mono tracking-wider"
                        style={{
                          textShadow: "0 0 20px rgba(30, 58, 138, 0.5)",
                          letterSpacing: "0.1em",
                        }}
                      >
                        {promotion?.code || "N/A"}
                      </span>
                    </div>
                    <div className="absolute -top-2 -right-2 text-xl animate-pulse">
                      🎁
                    </div>
                    <div className="absolute -bottom-2 -left-2 text-xl animate-pulse delay-500">
                      💎
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 text-center mt-2">
                    Click the button below to claim your exclusive bonus
                  </p>
                </div>
              </div>
              <motion.a
                href={promotion?.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg border-2 border-white/30 flex items-center justify-center gap-2 no-underline"
                whileHover={{
                  background: "linear-gradient(to right, #dc2626, #b91c1c)",
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-xl">🎰</span>
                <span>Claim Bonus</span>
                <span className="text-xl">🎁</span>
              </motion.a>
            </>
          )}
        </motion.div>
        </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

