const users = [
  'Moore Hensley',
  'Sharlene Bush',
  'Ross Vazquez',
  'Elma Head',
  'Carey Barr',
  'Blackburn Dotson',
  'Sheree Anthony',
];
const getUserNames = array => array.map(({ name }) => name);
console.log(getUserNames(users));
