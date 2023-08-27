import Card from "./components/Card";
import { IconLuxury, IconSedans, IconSuvs } from "./components/icons";

export default function App() {
  return (
    <>
      <Card
        image={<IconSedans />}
        className="orange"
        alt="images sedans | vehicle"
        title="Sedans"
      >
        Choose a sedan for its affordability and excellent fuel economy. Ideal
        for cruising in the city or on your next road trip.
      </Card>
      <Card
        image={<IconSuvs />}
        className="blue"
        alt="images suvs | vehicle"
        title="Suvs"
      >
        Take an SUV for its spacious interior, power, and versatility. Perfect
        for your next family vacation and off-road adventures.
      </Card>
      <Card
        image={<IconLuxury />}
        className="green"
        alt="images luxury | vehicle"
        title="Luxury"
      >
        Cruise in the best car brands without the bloated prices. Enjoy the
        enhanced comfort of a luxury rental and arrive in style.
      </Card>
    </>
  );
}
