// const getTotalBalanceByGender = (users, gender) =>
//   users
//     .filter(user => user.gender === gender)
//     .reduce((total, user) => total + user.balance, 0);

// const clients = [
//   {
//     name: 'Moore Hensley',
//     gender: 'male',
//     balance: 2811,
//   },
//   {
//     name: 'Sharlene Bush',
//     gender: 'female',
//     balance: 3821,
//   },
//   {
//     name: 'Ross Vazquez',
//     gender: 'male',
//     balance: 3793,
//   },
//   {
//     name: 'Elma Head',
//     gender: 'female',
//     balance: 2278,
//   },
//   {
//     name: 'Carey Barr',
//     gender: 'male',
//     balance: 3951,
//   },
//   {
//     name: 'Blackburn Dotson',
//     gender: 'male',
//     balance: 1498,
//   },
//   {
//     name: 'Sheree Anthony',
//     gender: 'female',
//     balance: 2764,
//   },
// ];

// console.log(getTotalBalanceByGender(clients, 'male')); // 12053
// console.log(getTotalBalanceByGender(clients, 'female')); // 8863

//TODO Тестові скрипти з 6 модуля ООП Класи...

const customer = {
  username: 'Jacob',
};

const animal = {
  legs: 4,
};

const dog = Object.create(animal);
dog.name = 'Mango';

console.log(dog); // { name: "Mango", [[Prototype]]: animal }

console.log(animal.isPrototypeOf(dog)); // true
console.log(dog.isPrototypeOf(animal)); // false
console.log(customer.isPrototypeOf(dog)); // false

console.log(dog.hasOwnProperty('name')); // true
