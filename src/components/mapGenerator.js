

var addSymbol = (alphabet, symbol) => {
  // Returns an array comprising each character in the alphabet with
  // the symbol added after.
  var newArray = [];
  for (let k = 0; k < alphabet.length; k++) {
    newArray.push(alphabet[k] + symbol);
  }
  return newArray;
}

var zipObject = (keys, values) => {
  // Returns an object combining keys and values
  // stored in two strings or arrays.
  if (keys.length !== values.length) {
    console.log("lengths differ, cannot zip object");
    return;
  }
  var obj = {};
  for (let k = 0; k < keys.length; k++) {
    obj[keys[k]] = values[k];
  }
  return obj;
}

// To add a circumflex to an uppercase vowel, should assume SMOOTH BREATHING

var greekAlphaStr = 'αβγδεζηθικλμνξοπρστυφϰψωΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ';
var longVowelsArray = ['α', 'η', 'ι', 'υ', 'ω'];
var longVowelsCircumflex = ['ᾶ', 'ῆ', 'ῖ', 'ῦ', 'ῶ'];
var circumflexKeyArray = addSymbol(longVowelsArray, '^');
var circumflex = zipObject(circumflexKeyArray, longVowelsCircumflex);
console.log(circumflex);

var breathingArray = ['α', 'ε', 'η', 'ι', 'ο', 'ρ', 'υ', 'ω', 'Α',
  'Ε', 'Η', 'Ι', 'Ο', 'Ρ', 'Υ', 'Ω'];
var roughBreathingArray = ['ἁ', 'ἑ', 'ἡ', 'ἱ', 'ὁ', 'ῥ', 'ὑ', 'ὡ',
  'Ἁ', 'Ἑ', 'Ἡ', 'Ἱ', 'Ὁ', 'Ῥ', 'Ὑ', 'Ὡ'];
var smoothBreathingArray = ['ἀ', 'ἐ', 'ἠ', 'ἰ', 'ὀ', 'ρ', 'ὐ', 'ὠ',
  'Ἀ', 'Ἐ', 'Ἠ', 'Ἰ', 'Ὀ', 'Ρ', 'Υ', 'Ὠ']

var roughBreathingKeyArray = addSymbol(breathingArray, '(');
var smoothBreathingKeyArray = addSymbol(breathingArray, ')');
var roughBreathing = zipObject(roughBreathingKeyArray, roughBreathingArray);
var smoothBreathing = zipObject(smoothBreathingKeyArray, smoothBreathingArray);

console.log(roughBreathing);
console.log(smoothBreathing);

var sublinearDotStr = 'α̣β̣γ̣δ̣ε̣ζ̣η̣θ̣ι̣κ̣λ̣μ̣ν̣ξ̣ο̣π̣ρ̣σ̣τ̣υ̣φ̣χ̣ψ̣ω̣Α̣Β̣Γ̣Δ̣Ε̣Ζ̣Η̣Θ̣Ι̣Κ̣Λ̣Μ̣Ν̣Ξ̣Ο̣Π̣Ρ̣Σ̣Τ̣Υ̣Φ̣Χ̣Ψ̣Ω̣';

var sublinearDotArray = [];
for (let k = 0; k < sublinearDotStr.length; k += 2) {
	sublinearDotArray.push(sublinearDotStr.substr(k, 2));
}
console.log(sublinearDotArray);

var greekAlphaPlusAt = addSymbol(greekAlphaStr, '@');
var sublinearDot = zipObject(greekAlphaPlusAt, sublinearDotArray);
console.log(sublinearDot);

module.exports = {
  circumflex,
  roughBreathing,
  smoothBreathing,
  sublinearDot
};
