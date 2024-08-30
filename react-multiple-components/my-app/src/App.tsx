import { RotatingBanner } from './RotatingBanner';
import './App.css';

export default function App() {
  const items = [
    'Aardvark',
    'Bengal',
    'Caterpillar',
    'Dromedary',
    'Elephant',
    'Ferret',
    'Giraffe',
    'Hippo',
    'Iguana',
  ];
  return <RotatingBanner items={items} />;
}
