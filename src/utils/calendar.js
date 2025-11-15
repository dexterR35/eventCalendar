// Configuration - You can customize promotions here
export const promotions = [
  {
    day: 1,
    title: "Winter Sale",
    description: "Get cozy with our winter collection",
    discount: "20% OFF",
    code: "WINTER20",
    link: "https://example.com/day1",
  },
  {
    day: 2,
    title: "Holiday Special",
    description: "Perfect gifts for everyone",
    discount: "15% OFF",
    code: "HOLIDAY15",
    link: "https://example.com/day2",
  },
  {
    day: 3,
    title: "Flash Deal",
    description: "Limited time offer",
    discount: "30% OFF",
    code: "FLASH30",
    link: "https://example.com/day3",
  },
  {
    day: 4,
    title: "Mega Bonus",
    description: "Exclusive casino bonus",
    discount: "50% OFF",
    code: "MEGA50",
    link: "https://example.com/day4",
  },
  {
    day: 5,
    title: "Weekend Special",
    description: "Weekend exclusive offer",
    discount: "25% OFF",
    code: "WEEKEND25",
    link: "https://example.com/day5",
  },
  // Add more promotions for each day of the month
];

export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function getCurrentDate() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return today;
}

export function getDayState(day, currentDay) {
  if (day < currentDay) return "past";
  if (day === currentDay) return "current";
  return "future";
}

export function getPromotion(day, currentMonthName, currentYear) {
  const monthAbbr = currentMonthName.substring(0, 3).toUpperCase();
  return (
    promotions.find((p) => p.day === day) || {
      day,
      title: `Day ${day} Special`,
      description: `Exclusive offer for ${currentMonthName} ${day}`,
      discount: "15% OFF",
      code: `${monthAbbr}${String(day).padStart(2, "0")}${currentYear}`,
      link: `https://example.com/day${day}`,
    }
  );
}

export function loadOpenedDays() {
  const saved = localStorage.getItem("adventOpenedDays");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      return new Set(parsed);
    } catch (e) {
      console.error("Error loading opened days:", e);
      return new Set();
    }
  }
  return new Set();
}

export function saveOpenedDays(openedDays) {
  localStorage.setItem(
    "adventOpenedDays",
    JSON.stringify(Array.from(openedDays))
  );
}

export function hasBeenOpened(day, today, openedDays) {
  const todayKey = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  const dayKey = `day-${day}-${todayKey}`;
  return openedDays.has(dayKey);
}

export function markAsOpened(day, today, openedDays) {
  const todayKey = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
  const dayKey = `day-${day}-${todayKey}`;
  openedDays.add(dayKey);
  saveOpenedDays(openedDays);
}

