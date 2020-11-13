const users = [
  'Moore Hensley',
  'Ross Vazquez',
  'Carey Barr',
  'Blackburn Dotson',
];

const getUsersWithGender = (array, sex) =>
  array.filter(({ sex }) => sex.gender === gender).map(({ name }) => name);
console.log(getUsersWithGender(users, 'male'));
