// Dynamic Promotion Generation - All promotions are generated automatically

// Dynamic promotion titles and descriptions
const promotionTitles = [
  "Daily Bonus",
  "Exclusive Offer",
  "Special Deal",
  "Mega Bonus",
  "Premium Reward",
  "Super Bonus",
  "Ultimate Deal",
  "VIP Offer",
  "Flash Sale",
  "Holiday Special",
  "Weekend Bonus",
  "Lucky Day",
  "Champion Deal",
  "Elite Bonus",
  "Royal Reward",
  "Diamond Deal",
  "Platinum Bonus",
  "Gold Special",
  "Silver Offer",
  "Bronze Bonus",
  "Crystal Deal",
  "Star Bonus",
  "Moon Special",
  "Sun Offer",
  "Rainbow Deal",
  "Thunder Bonus",
  "Storm Special",
  "Fire Offer",
  "Ice Deal",
  "Wind Bonus",
  "Earth Special",
];

const promotionDescriptions = [
  "Exclusive casino bonus for today",
  "Limited time offer - claim now",
  "Special promotion just for you",
  "Amazing bonus waiting for you",
  "Don't miss this exclusive deal",
  "Your daily reward is here",
  "Claim your special bonus today",
  "Exclusive offer - act fast",
  "Premium bonus available now",
  "Special deal of the day",
  "Limited edition bonus",
  "Exclusive daily promotion",
  "Your lucky bonus awaits",
  "Special reward for you",
  "Exclusive casino promotion",
];

// Generate dynamic discount percentage (10% to 100%)
function getDynamicDiscount(day) {
  // Use day number to create variation, but keep it reasonable
  const baseDiscount = 15 + (day % 20) * 2; // 15% to 55% range
  const specialDays = [7, 14, 21, 28]; // Special days get higher discounts
  if (specialDays.includes(day)) {
    return Math.min(50 + (day % 20) * 2, 100); // 50% to 100% for special days
  }
  return Math.min(baseDiscount, 100);
}

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
  
  // Generate dynamic promotion data based on day number
  const titleIndex = (day - 1) % promotionTitles.length;
  const descIndex = (day * 3) % promotionDescriptions.length;
  const discount = getDynamicDiscount(day);
  
  // Generate unique code based on day, month, and year
  const code = `${monthAbbr}${String(day).padStart(2, "0")}${currentYear}`;
  
  return {
    day,
    title: `${promotionTitles[titleIndex]} - Day ${day}`,
    description: `${promotionDescriptions[descIndex]} on ${currentMonthName} ${day}`,
    discount: `${discount}% OFF`,
    code: code,
    link: `https://example.com/day${day}`,
  };
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

