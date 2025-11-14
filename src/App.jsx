import AdventCalendar from './components/AdventCalendar'
import './App.css'

function App() {
  // Example promotions data - you can load this from an API or JSON file
  // If a day doesn't have a promotion, a default one with a unique code will be generated
  const promotions = [
    { day: 1, title: 'Winter Sale', description: 'Get cozy with our winter collection', discount: '20% OFF', code: 'WINTER20' },
    { day: 2, title: 'Holiday Special', description: 'Perfect gifts for everyone', discount: '15% OFF', code: 'HOLIDAY15' },
    { day: 3, title: 'Flash Deal', description: 'Limited time offer', discount: '30% OFF', code: 'FLASH30' },
    // Add more promotions as needed - each day will have a unique code
  ];

  return (
    <AdventCalendar 
      promotions={promotions}
    />
  )
}

export default App
