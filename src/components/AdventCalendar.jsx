import { useState, useMemo, useEffect } from 'react';

const AdventCalendar = ({ promotions = [] }) => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [openedDays, setOpenedDays] = useState(new Set());

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Get current month and year
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth(); // 0-11
  const currentDay = today.getDate(); // 1-31

  // Get number of days in current month
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  // Month names
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const currentMonthName = monthNames[currentMonth];

  // Load opened days from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('adventOpenedDays');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setOpenedDays(new Set(parsed));
      } catch (e) {
        console.error('Error loading opened days:', e);
      }
    }
  }, []);

  // Generate all days in current month
  const allDays = useMemo(() => {
    const days = [];
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    return days;
  }, [daysInMonth]);

  const getDayState = (day) => {
    if (day < currentDay) return 'past';
    if (day === currentDay) return 'current';
    return 'future';
  };

  const getPromotion = (day) => {
    const monthAbbr = currentMonthName.substring(0, 3).toUpperCase();
    return promotions.find(p => p.day === day) || {
      day,
      title: `Day ${day} Special`,
      description: `Exclusive offer for ${currentMonthName} ${day}`,
      discount: '15% OFF',
      code: `${monthAbbr}${String(day).padStart(2, '0')}${currentYear}`
    };
  };

  const handleCardClick = (day) => {
    const state = getDayState(day);
    
    // Don't allow clicking on future days
    if (state === 'future') return;
    
    // For past days, just show the modal with "Bonus Claimed"
    if (state === 'past') {
      setSelectedDay(day);
      return;
    }
    
    // For current day, check if already opened today
    const todayKey = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    const dayKey = `day-${day}-${todayKey}`;
    
    if (openedDays.has(dayKey)) {
      // Already opened today, just show the modal
      setSelectedDay(day);
      return;
    }

    // Mark as opened and save to localStorage
    const newOpenedDays = new Set(openedDays);
    newOpenedDays.add(dayKey);
    setOpenedDays(newOpenedDays);
    localStorage.setItem('adventOpenedDays', JSON.stringify(Array.from(newOpenedDays)));
    
    setSelectedDay(day);
  };

  const closeModal = () => {
    setSelectedDay(null);
  };

  const selectedPromotion = selectedDay ? getPromotion(selectedDay) : null;
  const selectedDayState = selectedDay ? getDayState(selectedDay) : null;
  const isSelectedDayPast = selectedDayState === 'past';
  const isSelectedDayCurrent = selectedDayState === 'current';

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-pink-200 mb-3">
                Advent Calendar
              </h1>
              <div className="h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full"></div>
            </div>
            <p className="text-xl sm:text-2xl text-purple-200 font-medium mb-2 mt-6">
              Discover a new promotion every day in {currentMonthName}!
            </p>
            <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-white/80 text-sm">Today is</span>
              <span className="text-white font-bold text-lg">{currentMonthName} {currentDay}, {currentYear}</span>
            </div>
          </div>
          
          {/* Calendar Grid - Full Width with wider cards */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4 sm:gap-5 lg:gap-6">
            {allDays.map((day) => {
              const state = getDayState(day);
              const promotion = getPromotion(day);
              const isPast = state === 'past';
              const isCurrent = state === 'current';
              const isFuture = state === 'future';
              
              const todayKey = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
              const dayKey = `day-${day}-${todayKey}`;
              const hasBeenOpened = openedDays.has(dayKey);

              return (
                <div
                  key={day}
                  onClick={() => handleCardClick(day)}
                  className={`
                    group relative rounded-2xl overflow-hidden transition-all duration-500
                    ${isCurrent 
                      ? 'bg-gradient-to-br from-red-500 via-pink-500 to-red-600 shadow-2xl shadow-red-500/50 scale-105 cursor-pointer hover:scale-110 ring-4 ring-red-300/50 hover:ring-red-400/70' 
                      : isPast
                      ? 'bg-gradient-to-br from-slate-700/80 to-slate-800/80 backdrop-blur-sm shadow-lg shadow-slate-900/50 cursor-pointer hover:scale-105 border border-slate-600/50 opacity-75'
                      : 'bg-slate-800/40 backdrop-blur-sm shadow-md opacity-60 cursor-not-allowed border border-slate-700/50'
                    }
                  `}
                >
                  {/* Shine effect overlay - only for current day */}
                  {isCurrent && (
                    <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  )}
                  
                  {/* Day Number Badge */}
                  <div className={`
                    absolute top-3 right-3 w-9 h-9 rounded-xl flex items-center justify-center
                    text-sm font-bold z-10 shadow-lg
                    ${isCurrent 
                      ? 'bg-white text-red-600 shadow-red-300/50' 
                      : isPast
                      ? 'bg-slate-600 text-white shadow-slate-900/50'
                      : 'bg-slate-700 text-slate-400 shadow-slate-900/50'
                    }
                  `}>
                    {day}
                  </div>

                  {/* Card Content */}
                  <div className="p-5 sm:p-6 pt-14 min-h-[180px] sm:min-h-[200px] flex flex-col justify-between">
                    {isFuture ? (
                      <div className="text-center flex flex-col items-center justify-center h-full">
                        <div className="text-3xl sm:text-4xl mb-2">
                          🔒
                        </div>
                        <p className="text-xs sm:text-sm text-slate-400 font-medium">
                          Locked
                        </p>
                      </div>
                    ) : isPast ? (
                      <div className="text-center flex flex-col items-center justify-center h-full">
                        <div className="mb-3">
                          <svg className="w-8 h-8 text-slate-400 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-sm sm:text-base text-slate-400 font-semibold mb-1">
                          Bonus Claimed
                        </p>
                        <p className="text-xs text-slate-500">
                          {currentMonthName} {day}
                        </p>
                      </div>
                    ) : (
                      <>
                        <div className="flex-1">
                          <div className="mb-4">
                            <div className="inline-block px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-lg mb-3">
                              <span className="text-xs font-bold text-white uppercase tracking-wider">Today's Bonus</span>
                            </div>
                            <div className="text-base sm:text-lg font-bold text-white mb-2">
                              {promotion.discount || 'Special'}
                            </div>
                          </div>
                          
                          {/* Promotion Title */}
                          <h3 className="text-sm sm:text-base font-semibold mb-3 line-clamp-2 text-white">
                            {promotion.title}
                          </h3>
                        </div>

                        {/* Code Display */}
                        <div className="mt-4 pt-4 border-t border-white/30">
                          <p className="text-[10px] uppercase tracking-wider mb-2 text-white/70">
                            Promo Code
                          </p>
                          <div className="font-mono text-sm sm:text-base font-bold tracking-wider text-white">
                            {promotion.code}
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Decorative corner element */}
                  <div className={`
                    absolute bottom-0 left-0 w-0 h-0 
                    border-l-[20px] border-l-transparent
                    border-b-[20px]
                    ${isCurrent 
                      ? 'border-b-white/20' 
                      : 'border-b-slate-700/30'
                    }
                  `}></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
      {selectedDay && selectedPromotion && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-300"
          onClick={closeModal}
        >
          <div 
            className="bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-2xl max-w-lg w-full p-8 sm:p-10 relative animate-in zoom-in-95 duration-300 border border-white/20"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="text-center">
              {isSelectedDayPast ? (
                <>
                  <div className="text-7xl mb-6">✅</div>
                  
                  <div className="mb-6">
                    <h2 className="text-3xl sm:text-4xl font-black text-gray-800 mb-3">
                      {currentMonthName} {selectedDay}
                    </h2>
                    <div className="inline-block px-6 py-3 bg-gradient-to-r from-slate-400 to-slate-500 rounded-full">
                      <span className="text-xl font-bold text-white">
                        Bonus Claimed
                      </span>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-slate-100 to-slate-200 rounded-2xl p-6 mb-6 border-2 border-slate-300 shadow-lg">
                    <p className="text-sm text-gray-600 mb-2 font-medium uppercase tracking-wider">This bonus was already claimed</p>
                    <p className="text-xs text-gray-500">You can only claim bonuses on their respective days</p>
                  </div>

                  <button
                    onClick={closeModal}
                    className="w-full bg-gradient-to-r from-slate-500 to-slate-600 hover:from-slate-600 hover:to-slate-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Close
                  </button>
                </>
              ) : (
                <>
                  <div className="text-7xl mb-6 animate-bounce">🎁</div>
                  
                  <div className="mb-6">
                    <h2 className="text-3xl sm:text-4xl font-black text-gray-800 mb-3">
                      {currentMonthName} {selectedDay}
                    </h2>
                    <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-red-500 to-pink-500 rounded-full">
                      <span className="text-xl font-bold text-white">
                        {selectedPromotion.discount || 'Special Offer'}
                      </span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {selectedPromotion.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {selectedPromotion.description}
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-red-50 via-pink-50 to-purple-50 rounded-2xl p-6 mb-6 border-2 border-red-200/50 shadow-lg">
                    <p className="text-sm text-gray-600 mb-3 font-medium uppercase tracking-wider">Your Promo Code</p>
                    <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-600 to-purple-600 font-mono tracking-wider mb-2">
                      {selectedPromotion.code}
                    </div>
                    <p className="text-xs text-gray-500">Use this code at checkout</p>
                  </div>

                  <button
                    onClick={(e) => {
                      navigator.clipboard.writeText(selectedPromotion.code);
                      const btn = e.currentTarget;
                      const originalText = btn.textContent;
                      btn.textContent = '✓ Copied!';
                      btn.classList.add('bg-green-600', 'hover:bg-green-700');
                      setTimeout(() => {
                        btn.textContent = originalText;
                        btn.classList.remove('bg-green-600', 'hover:bg-green-700');
                      }, 2000);
                    }}
                    className="w-full bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    Copy Code
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdventCalendar;
