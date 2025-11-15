import { getDayState, getPromotion } from '../utils/calendar';

export default function Modal({ selectedDay, currentDay, currentMonthName, currentYear, onClose }) {
  if (!selectedDay) return null;

  const state = getDayState(selectedDay, currentDay);
  const promotion = getPromotion(selectedDay, currentMonthName, currentYear);
  const isPast = state === "past";

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-2xl max-w-lg w-full p-8 sm:p-10 relative zoom-in-95 border border-white/20">
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
        <div className="text-center">
          {isPast ? (
            <>
              <div className="text-4xl mb-4">✅</div>
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
              <button
                onClick={onClose}
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-white/30"
              >
                Close
              </button>
            </>
          ) : (
            <>
              <div className="relative mb-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <span className="text-5xl animate-pulse">🎰</span>
                  <span className="text-6xl animate-bounce">🎁</span>
                  <span className="text-5xl animate-pulse delay-500">💎</span>
                </div>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-sm">✨</span>
                  <span className="text-xs font-black text-gray-700 uppercase tracking-widest">
                    Casino Christmas Bonus
                  </span>
                  <span className="text-sm">✨</span>
                </div>
              </div>
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
                    {promotion.discount || "Special Offer"}
                  </div>
                  <div className="text-xs text-white/90 font-semibold uppercase tracking-wider">
                    Exclusive Bonus
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                  {promotion.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center text-sm">
                  {promotion.description}
                </p>
              </div>
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-white/10 to-yellow-400/20 rounded-2xl blur-md"></div>
                <div className="relative bg-gradient-to-br from-yellow-50/90 via-white to-yellow-50/90 rounded-2xl p-6 border-2 border-yellow-300/60 shadow-2xl">
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
                        className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 via-red-600 to-yellow-600 font-mono tracking-wider"
                        style={{
                          textShadow: "0 0 20px rgba(255, 215, 0, 0.4)",
                          letterSpacing: "0.1em",
                        }}
                      >
                        {promotion.code}
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
              <a
                href={promotion.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border-2 border-white/30 flex items-center justify-center gap-2 no-underline"
              >
                <span className="text-xl">🎰</span>
                <span>Claim Bonus</span>
                <span className="text-xl">🎁</span>
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

