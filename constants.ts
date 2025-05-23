
import { RitualStep } from './types';
import { 
  EggIcon, 
  CreamIcon, 
  CheeseIcon, 
  WhiskIcon, 
  OvenIcon, 
  ThermometerIcon, 
  DeliveryIcon, 
  TastingIcon 
} from './components/icons';

export const RITUAL_STEPS: RitualStep[] = [
  {
    id: 1,
    title: "Huevos de gallinas en libertad",
    description: "Alma de la tierra, seleccionados por su yema de sol y carácter auténtico.",
    Icon: EggIcon,
  },
  {
    id: 2,
    title: "Natas de vacas sin estrés",
    description: "Pura caricia láctea, de animales que pastan en calma bajo cielos abiertos.",
    Icon: CreamIcon,
  },
  {
    id: 3,
    title: "Quesos artesanales sin curación forzada",
    description: "Tesoros de paciencia, madurados al ritmo que dicta su esencia.",
    Icon: CheeseIcon,
  },
  {
    id: 4,
    title: "Batido sin aire",
    description: "Un susurro en la mezcla, donde cada ingrediente se funde en armonía.",
    Icon: WhiskIcon,
  },
  {
    id: 5,
    title: "Cocción lenta",
    description: "El tiempo como aliado, transformando la materia en pura poesía comestible.",
    Icon: OvenIcon,
  },
  {
    id: 6,
    title: "Reposo a distintas temperaturas",
    description: "Un ballet térmico que asienta texturas y despierta matices ocultos.",
    Icon: ThermometerIcon,
  },
  {
    id: 7,
    title: "Entrega solo < 5 km",
    description: "Un viaje corto para preservar la promesa de frescura y exclusividad.",
    Icon: DeliveryIcon,
  },
  {
    id: 8,
    title: "Instrucciones de degustación",
    description: "Una guía sutil para un encuentro íntimo, donde cada bocado es un descubrimiento.",
    Icon: TastingIcon,
  },
];
