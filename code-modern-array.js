/*==================================================================================
  map()
===================================================================================*/
const fahrenheit = [0, 32, 45, 50, 75, 80, 125];
const selsius = fahrenheit.map((elem) => Math.round(((elem - 32) * 5) / 9));
// console.log(selsius);

/*==================================================================================
  filter()
===================================================================================*/
// Irá percorrer o array, permite filtrar os elementos do array sem repeti-los
const yetAnotherArray = [2, 3, 4, 5, 4, 12, 19, 7, 2, 5];
const uniqueArray = yetAnotherArray.filter((elem, index, arr) => arr.indexOf(elem) === index);
// console.log(uniqueArray);

/*==================================================================================
  reduce()
===================================================================================*/

const rocket = [
  { country: "Russia", launches: 32 },
  { country: "Us", launches: 23 },
  { country: "China", launches: 16 },
  { country: "Alemanha", launches: 7 },
  { country: "França", launches: 4 },
  { country: "Canadá", launches: 3 },
];

const totalLaunches = rocket.reduce((prevValue, elem) => prevValue + elem.launches, 0); // passar um valor inicial
// console.log(totalLaunches);

/*==================================================================================
  every()

  Irá verificar se todos  os elementos de um array são maiores de idade
===================================================================================*/
const tchurma = [
  { id: 12, name: "Aderbal", age: 48 },
  { id: 47, name: "Arlindo Cruz", age: 50 },
  { id: 10, name: "Maria Lucia", age: 69 },
  { id: 19, name: "Raimunda", age: 89 },
  { id: 1, name: "Eustáquio", age: 80 },
];

const maxAge = tchurma.every((elem) => elem.age > 18);
console.log(maxAge);
