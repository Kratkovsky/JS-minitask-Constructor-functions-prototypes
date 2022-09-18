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


const userProto = {
  login: function () {
    this.isLoggedInIn = true;
    console.log('user is online now');
  },
  getFullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
  logout: function () {
    this.isLoggedIn = false;
    console.log('user is offline now');
  },
};

function User (firstName, lastName, email, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.age = age;
  this.isLoggedIn = false;
}

User.prototype = userProto;

const user1 = new User('Name', 'Last Name', 'Email', 30);
const user2 = new User('NAME', 'LAST NAME', 'EMAIL', 50);