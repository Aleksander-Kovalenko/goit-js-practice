const users = [
  'Moore Hensley',
  'Ross Vazquez',
  'Carey Barr',
  'Blackburn Dotson',
];

const getUsersWithGender = (array, sex) =>
  array.filter(({ gender }) => sex === gender).map(({ name }) => name);
console.log(getUsersWithGender(users, 'male'));
