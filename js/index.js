'use strict';
// Создать функцию-конструктор User
// у пользователей должны быть свойства:
// firstName
// lastName
// email
// age
// isLoggedIn



// Создать прототип для обїектов пользователей
// в прототипе реализовать следующий методы:
// getFullName - метод, который вернет строчку, содержащую имя и фамилию пользователя
// logout - метод, который имитирует логаут пользователя, меняя переменную isLoggedIn
// login - метод, который имитирует логин пользователя, меняя переменную isLoggedIn

const peopleProto = {
  logout: function () {
    console.log('user is offline now');
  },
};

const userProto = {
  isOnline: false,
  getFullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  }
}

userProto.__proto__ = peopleProto;

function User (firstName, lastName, email, age, isOnline) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.isOnline = isOnline;
}


const user1 =  {
  firstName: 'Name',
  lastName: 'Last Name',
  email: 'emai',
  age: 30,
};

const user2 = {
  firstName: 'NAME',
  lastName: 'LAST NAME',
  email: 'EMAIL',
  age: 50,
}

user1.__proto__= userProto;
user2.__proto__ = userProto;


// function User (firstName, lastName, email, age, isLoggedIn, fullName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.email = email;
//   this.age = age;
//   this.isLoggedIn = isLoggedIn
//   this.fullName = function() {
//     console.log(firstName, lastName);
//   }
// }

// const user1 = new User('Name', 'Last Name', 'Email', '30');
// const user2 = new User('NAME', 'LAST NAME', 'EMAIL', '50');


// const user1 =  {
//   firstName: 'Name',
//   lastName: 'Last Name',
//   email: 'emai',
//   age: 30,
// };

// const user2 = {
//   firstName: 'NAME',
//   lastName: 'LAST NAME',

// }

// const userProto = {
//   fullName: function () {
//     console.log(`${firstName} ${lastName}`);
//   }
// }

// user1.__proto__= userProto;
// user2.__proto__ = userProto;

// User.prototype = userProto;

// const onlineProto = {
//   isUserOnline: function (isOnline) {
//     console.log(`${this.firstName} ${this.lastName} is ${isOnline}`);
//   },
// }



// function Phone(model, manufacturer, isOn) {
//   this.model = model;
//   this.manufacturer = manufacturer;
//   this.isOn = isOn;
// }

// const phoneProto = {
//   isOn: false,
//   call: function (number) {
//     console.log(`${this.manufacturer} ${this.model} is calling ${number}`);
//   },
// };

// const deviceProto = {
//   turnOn: function () {
//     console.log('device is turned on now');
//   },
// };

// phoneProto.__proto__ = deviceProto;

// Phone.prototype = phoneProto;

// const phone1 = {
//   model: 'Pro',
//   manufacturer: 'Apple',
//   __proto__: phoneProto,
// };

// const phone2 = {
//   model: 'Basic',
//   manufacturer: 'Google',
// };

// phone1.__proto__ = phoneProto;
// phone2.__proto__ = phoneProto;

// const phone1 = new Phone('Pro', 'Apple', false);
// const phone2 = new Phone('Basic', 'Google', true);

// const arr1 = [1];
// const arr2 = [1];


