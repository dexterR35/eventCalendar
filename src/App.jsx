import { useState, useEffect } from 'react';
import Header from './components/Header';
import CalendarCard from './components/CalendarCard';
import Modal from './components/Modal';
import Steps from './components/Steps';
import Footer from './components/Footer';
import Snowflakes from './components/Snowflakes';
import {
  getCurrentDate,
  monthNames,
  getDayState,
  getPromotion,
  loadOpenedDays,
  saveOpenedDays,
  markAsOpened,
} from './utils/calendar';

function App() {
  const [selectedDay, setSelectedDay] = useState(null);
  const [openedDays, setOpenedDays] = useState(new Set());

  const today = getCurrentDate();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentDay = today.getDate();
  const currentMonthName = monthNames[currentMonth];
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

  useEffect(() => {
    const saved = loadOpenedDays();
    setOpenedDays(saved);
  }, []);

  const handleCardClick = (day) => {
    const state = getDayState(day, currentDay);

    if (state === 'future') return;

    if (state === 'past') {
      setSelectedDay(day);
      return;
    }

    // Current day - mark as opened if not already
    const todayKey = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    const dayKey = `day-${day}-${todayKey}`;
    if (!openedDays.has(dayKey)) {
      const newOpenedDays = new Set(openedDays);
      markAsOpened(day, today, newOpenedDays);
      setOpenedDays(newOpenedDays);
    }
    setSelectedDay(day);
  };

  const closeModal = () => {
    setSelectedDay(null);
  };

  // Calculate the 3 days to show: previous, current, next
  const previousDay = currentDay > 1 ? currentDay - 1 : null;
  const nextDay = currentDay < daysInMonth ? currentDay + 1 : null;
  const daysToShow = [previousDay, currentDay, nextDay].filter(
    (day) => day !== null
  );

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{
        background:
          'linear-gradient(135deg, #080f1f 0%, #0a1628 20%, #0d1b35 40%, #0a1628 60%, #080f1f 80%, #080f1f 100%)',
      }}
    >
      {/* Snow Container */}
      <Snowflakes />

      {/* Christmas Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Stars */}
        <div className="absolute top-10 left-10 text-white text-2xl twinkle">
          ⭐
        </div>
        <div className="absolute top-20 right-20 text-white text-xl twinkle delay-500">
          ✨
        </div>
        <div className="absolute top-32 left-1/4 text-white text-lg twinkle delay-1000">
          ⭐
        </div>
        <div className="absolute top-16 right-1/3 text-white text-xl twinkle">
          ✨
        </div>
        <div className="absolute top-40 left-3/4 text-white text-lg twinkle delay-500">
          ⭐
        </div>

        {/* Christmas Ornaments - Red only */}
        <div className="absolute bottom-20 left-10 text-red-600 text-3xl float">
          🔴
        </div>
        <div className="absolute bottom-32 right-16 text-red-500 text-3xl float delay-500">
          🔴
        </div>
        <div className="absolute bottom-24 left-1/4 text-red-600 text-2xl float delay-1000">
          🔴
        </div>
        <div className="absolute bottom-40 right-1/3 text-red-500 text-2xl float">
          🔴
        </div>

        {/* Animated background glow - Blue Christmas */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <Header />

        {/* 3D Panorama Slider Container */}
        <div className="panorama-container">
          <div className="panorama-slider">
            {daysToShow.map((day, index) => (
              <CalendarCard
                key={day}
                day={day}
                currentDay={currentDay}
                currentMonthName={currentMonthName}
                currentYear={currentYear}
                today={today}
                openedDays={openedDays}
                onCardClick={handleCardClick}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Steps Section */}
        <Steps />
      </div>

      {/* Footer */}
      <Footer />

      {/* Modal */}
      {selectedDay && (
        <Modal
          selectedDay={selectedDay}
          currentDay={currentDay}
          currentMonthName={currentMonthName}
          currentYear={currentYear}
          onClose={closeModal}
        />
      )}
    </div>
  );
}

export default App;

