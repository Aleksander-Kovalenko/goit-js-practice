function isLoginValid(login, min = 4, max = 16) {
  // Write code under this line
  return (login = login.length >= min && login.length <= max);
}

function isLoginUnique(allLogins, login) {
  'use strict';
  return !allLogins.includes(login);
}

function addLogin(allLogins, login) {
  'use strict';
  const SUCCESS = 'Логин успешно добавлен!';
  const REFUSAL = 'Такой логин уже используется!';
  const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
  let message;
  // Write code under this line
  if (isLoginValid(login)) {
    if (isLoginUnique(allLogins, login)) {
      allLogins.push(login);
      message = SUCCESS;
      console.log(allLogins, login);
      return message;
    }
    message = REFUSAL;
    return message;
  }
  message = ERROR;
  return message;
}

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

console.log(addLogin(logins, 'Ajax'));
// // 'Логин успешно добавлен!'

console.log(addLogin(logins, 'robotGoogles'));
// 'Такой логин уже используется!'

console.log(addLogin(logins, 'Zod'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(addLogin(logins, 'jqueryisextremelyfast'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

/*
УСЛОВИЯ
. Массив который поулчает агрументы с логинами
. Условная конструкция, логин не меньше 4 и не больше 16 символов.

ФУНКЦИИ 
. isLoginValid(login) - ф-ия проверки логина на к-во симоволо х =больше 4 и меньше равно 16 возваращает тру или фолсе.
. isLoginUnique(allLogins, login) - проверям уникальность полученных логинов, а также проверка на наличие новых валидных логинов, возваращаем тру или фолсе
. addLogin(allLogins, login) - 
новый валидный логин (isLoginValid(login)) 
ТО проверяет уникальность логина с помощью функции isLoginUnique 
{
    !isLoginUnique
    ТО
'Такой логин уже используется!'
ИНАЧЕ
   'Логин успешно добавлен!'
}
ИНАЧЕ 'Ошибка! Логин должен быть от 4 до 16 символов'
*/
