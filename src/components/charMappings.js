import romanToGreek from './romanToGreek';
import doubleLetters from './doubleLetters';
import { circumflex, roughBreathing, smoothBreathing, sublinearDot } from './mapGenerator';

let charMappings = [
  doubleLetters,
  romanToGreek,
  circumflex,
  roughBreathing,
  smoothBreathing,
  sublinearDot
];

// let oneToOne = [
//   romanToGreek,
//   sublinearDot
// ];
//
// let twoToOne = [
//   doubleLetters,
//   circumflex,
//   roughBreathing,
//   smoothBreathing
// ]

export default charMappings;
