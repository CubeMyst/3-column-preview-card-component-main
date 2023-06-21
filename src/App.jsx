import Card from './components/Card';
import sedan from './images/icon-sedans.svg';
import suvs from './images/icon-suvs.svg';
import luxury from './images/icon-luxury.svg';

export default function App() {
  return (
    <>
      <Card image={sedan} className='orange' alt="images sedans | vehicle" title='Sedans' article='Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.' />
      <Card image={suvs} className='blue' alt="images suvs | vehicle" title='Suvs' article='Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.' />
      <Card image={luxury} className='green' alt="images luxury | vehicle" title='Luxury' article='Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.' />
    </>
  )
}