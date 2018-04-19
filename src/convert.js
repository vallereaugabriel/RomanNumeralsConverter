export default function convert(romanNum) {
  const regex = /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
  if (!regex.test(romanNum)) {
    throw new Error("La chaîne entrée n'est pas un chiffre romain compris entre O et 4999");
  }
  
  const captRegex = /^(M{0,4})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
  const result = captRegex.exec(romanNum);
  const thousands = result[1];
  const hundreds = result[2];
  const tens = result[3];
  const units = result[4];
  let number = 0;

  number += thousands.length * 1000;

  switch(hundreds) {
    case "CM": number += 900; break;
    case "CD": number += 400; break;
    default: 
     if (hundreds.length > 0) {
       if (hundreds[0] === 'D') {
         number += 500 + (hundreds.length - 1) * 100;
       } else {
         number += hundreds.length * 100;
       }
     }
     break;
  }

  switch(tens) {
    case "XC": number += 90; break;
    case "XL": number += 40; break;
    default: 
     if (tens.length > 0) {
       if (tens[0] === 'L') {
         number += 50 + (tens.length - 1) * 10;
       } else {
         number += tens.length * 10;
       }
     }
     break;
  }

  switch(units) {
    case "IX": number += 9; break;
    case "IV": number += 4; break;
    default: 
     if (units.length > 0) {
       if (units[0] === 'V') {
         number += 5 + (units.length - 1);
       } else {
         number += units.length;
       }
     }
     break;
  }

  return number;
} 