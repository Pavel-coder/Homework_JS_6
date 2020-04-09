// - создать массив с 20 числами.
// let arr = [1, -5, 10, 777, 21, 350, 100, 4, 0, -18 ];

// -- при помощи метода sort отсортировать массив.
// arr.sort((a,b)=> a - b);
// console.log(arr);

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// arr.sort((a,b)=> b - a);
// console.log(arr);

// -- при помощи filter получить числа кратные 3
// let filter = arr.filter((num)=>{if (num % 3 === 0 && num > 0){return true;} return false;});
// console.log(filter);

// -- при помощи filter получить числа кратные 10
// let filter = arr.filter((num)=>{if (num % 10 === 0 && num > 0){return true;} return false;});
// console.log(filter);

// -- перебрать (проитерировать) массив при помощи foreach()
// let iter = arr.forEach((num)=>console.log(num));

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше
// let newArr = arr.map((num) => num * 3);
// console.log(newArr);

// - создать массив со словами на 15-20 элементов.
// -- отсортировать его по алфавиту в восходящем порядке.
// let arrString = ['Hello', 'Bye', 'false', 'mark', 'go', 'want', 'English', 'tree', 'TV', 'wall', 'smart', 'start','finish', 'hand', 'fly', 'sleep'];
// let newArrString = arrString.map((str)=>str.toLowerCase());
// newArrString.sort();
// console.log(newArrString);

// -- отсортировать его по алфавиту  в нисходящем порядке.
// let arrString = ['Hello', 'Bye', 'false', 'mark', 'go', 'want', 'English', 'tree', 'TV', 'wall', 'smart', 'start','finish', 'hand', 'fly', 'sleep'];
// let newArrString = arrString.map((str) => str.toLowerCase());
// newArrString.sort().reverse();
// console.log(newArrString);

// -- отфильтровать слова длиной менее 4х символов
// let arrString = ['Hello', 'Bye', 'false', 'mark', 'go', 'want', 'English', 'tree', 'TV', 'wall', 'smart', 'start','finish', 'hand', 'fly', 'sleep'];
// let arrFilterString = arrString.filter((str) => {if (str.length > 3){return true} return false} );
// console.log(arrFilterString);

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// let arrString = ['Hello', 'Bye', 'false', 'mark', 'go', 'want', 'English', 'tree', 'TV', 'wall', 'smart', 'start','finish', 'hand', 'fly', 'sleep'];
// let sortArrayMap = arrString.map((str) => str + '!');

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
//     let users = [ {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true} ];

// - відсортувати його за  віком (зростання , а потім окремо спадання)
// users.sort((age1,age2) => age1.age - age2.age);
// console.log(users);

// users.sort((age1,age2) => age2.age - age1.age);
// console.log(users);

// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
// users.sort((name1,name2) => name1.name.length - name2.name.length);
// console.log(users);

// users.sort((name1,name2) => name2.name.length - name1.name.length);
// console.log(users)

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// - відсортувати його за індентифікатором
// let idUser = users.map((objId,index) => {objId.id = index; return objId;});
// console.log(idUser);

// -- наисать функцию калькулятора с 2мя числами и колбеком
// function calculate(a, b, callback) {
//     callback(a,b);
// }
// calculate(50,20, function (a,b) {
//     console.log(a + b);
//
// });
// calculate(50,20, function (a,b) {
//     console.log(a - b);
//
// });
// calculate(50,20, function (a,b) {
//     console.log(a * b);
//
// });
// calculate(50,20, function (a,b) {
//     console.log(a / b);
//
// });

// -- наисать функцию калькулятора с 3мя числами и колбеком
// function calculate(a, b, c, callback) {
//     callback(a,b,c);
// };
// calculate(50,20, 30,function (a,b,c) {
//     console.log(a + b + c);
// });
// calculate(50,20, 30,function (a,b,c) {
//     console.log(a + b - c);
// });
// calculate(50,20, 30,function (a,b,c) {
//     console.log(a + b * c);
// });
// calculate(50,20, 30,function (a,b,c) {
//     console.log(a + b / c);
// });
// calculate(50,20, 30,function (a,b,c) {
//     console.log(a - b + c);
// });
// calculate(50,20, 30,function (a,b,c) {
//     console.log(a * b + c);
// });
// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================
//
// let cars = [ {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
// {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
// {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
// {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
// {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
// {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
// {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
// {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
// {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
// {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
// {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
// {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
// {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230} ];

// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів
// let carsMotorFilter = cars.filter((val) => {if (val.volume > 3) {return true}});
// console.log(carsMotorFilter);

// - двигун = 2л
// let carsMotorFilter = cars.filter((val) => {if (val.volume === 2) {return true}});
// console.log(carsMotorFilter);

// - виробник мерс
// let carsMotorFilter = cars.filter((val) => {if (val.producer === 'mercedes') {return true}});
// console.log(carsMotorFilter);

// - двигун більше 3х літрів + виробник мерседес
// let carsMotorFilter = cars.filter((val) => {if (val.volume > 3 && val.producer === 'mercedes') {return true}});
// console.log(carsMotorFilter);

// - двигун більше 3х літрів + виробник субару
// let carsMotorFilter = cars.filter((val) => {if (val.volume > 3 && val.producer === 'subaru') {return true}});
// console.log(carsMotorFilter);

// - сили більше ніж 300
// let carsMotorFilter = cars.filter((val) => {if ( val.power > 300) {return true}});
// console.log(carsMotorFilter);

// - сили більше ніж 300 + виробник субару
// let carsMotorFilter = cars.filter((val) => {if ( val.power > 300 && val.producer === 'subaru') {return true}});
// console.log(carsMotorFilter);

// - мотор серіі ej
// let carsMotorFilter = cars.filter((val) => {if ( val.engine.startsWith('ej')) {return true}});
// console.log(carsMotorFilter);

// - сили більше ніж 300 + виробник субару + мотор серіі ej
// let carsMotorFilter = cars.filter((val) => {if ( val.engine.startsWith('ej') && val.power > 300) {return true}});
// console.log(carsMotorFilter);


// - двигун меньше 3х літрів + виробник мерседес
// let carsMotorFilter = cars.filter((val) => {if ( val.volume < 3 && val.producer === 'mercedes') {return true}});
// console.log(carsMotorFilter);

// - двигун більше 2л + сили більше 250
// let carsMotorFilter = cars.filter((val) => {if ( val.volume > 2 && val.power > 250) {return true}});
// console.log(carsMotorFilter);

// - сили більше 250  + виробник бмв
// let carsMotorFilter = cars.filter((val) => {if ( val.power > 250 && val.producer === 'bmw') {return true}});
// console.log(carsMotorFilter);


// - взять слдующий массив
// let usersWithAddress = [{id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
// {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Lviv', street: 'Dragomanova', number: 1}},
// {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Lenina', number: 121}},
// {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Lviv', street: 'Khreshatik', number: 90}},
// {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Saksaganskogo', number: 115}},
// {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Lviv', street: 'Gorkogo', number: 2}},
// {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Lviv', street: 'Bendukidze', number: 22}},
// {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Volinskaya', number: 43}},
// {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Lviv', street: 'Zamkovaya', number: 12}},
// {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Andreevskaya', number: 16}},
// {id: 11, name: 'max', age: 31, status: true, address: {city: 'Lviv', street: 'Stusa', number: 121}}];

// -- отсортировать его по id пользователей
// usersWithAddress.sort((id1,id2) => id1.id - id2.id);
// console.log(usersWithAddress);

// -- отсортировать его по id пользователей в обратном опрядке
// usersWithAddress.sort((id1,id2) => id2.id - id1.id);
// console.log(usersWithAddress);

// -- отсортировать его по возрасту пользователей
// usersWithAddress.sort((age1,age2) => age1.age - age2.age);
// console.log(usersWithAddress);

// -- отсортировать его по возрасту пользователей в обратном порядке
// usersWithAddress.sort((age1,age2) => age2.age - age1.age);
// console.log(usersWithAddress);

// -- отсортировать его по имени пользователей
// usersWithAddress.sort((name1,name2) => {if (name1.name < name2.name){return -1} else{return 1}});
// console.log(usersWithAddress);

// -- отсортировать его по имени пользователей в обратном порядке
// usersWithAddress.sort((name1,name2) => {if (name1.name > name2.name){return -1} else{return 1}});
// console.log(usersWithAddress);

// -- отсортировать его по названию улицы  в алфавитном порядке
// usersWithAddress.sort((adress1,adress2) => {if (adress1.address.street < adress2.address.street){return -1} else{return 1}});
// console.log(usersWithAddress);

// -- отсортировать его по номеру дома по возрастанию
// usersWithAddress.sort((num1,num2) => num1.address.number - num2.address.number);
// console.log(usersWithAddress);

// -- отфильтровать (оставить) тех кто младше 30
// let sortUser = usersWithAddress.filter((user) => {if(user.age < 30){return true}});
// console.log(sortUser);

// -- отфильтровать (оставить) тех у кого отрицательный статус
// let sortUser = usersWithAddress.filter((user) => {if(user.status === false){return true}});
// console.log(sortUser);

// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// let sortUser = usersWithAddress.filter((user) => {if(user.status === false && user.age < 30){return true}});
// console.log(sortUser);

// -- отфильтровать (оставить) тех у кого номер дома четный
// let sortUser = usersWithAddress.filter((user) => {if(user.address.number % 2 === 0){return true}});
// console.log(sortUser);
//
//
// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
//     Створити не менше 7 та не більше 20 машинок.
//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
//     Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
// __________________________________________________________________________________________________________________

// let cars = [ {producer:"subaru",year: 2010,volume: 2,power: 400, driver:{name:"igor", age: 33,experience: 10}},
//              {producer:"bmw",year: 2007,volume: 3.5,power: 280,driver:{name:"oleg", age: 20,experience: 1}},
//              {producer:"audi",year: 2017,volume: 4,power: 350,driver:{name:"pavel", age: 30,experience: 7}},
//              {producer:"mercedes",year: 2000,volume: 2.2,power: 150,driver:{name:"den", age: 25,experience: 2}},
//              {producer:"zaz",year: 2020,volume: 0.6,power: 80,driver:{name:"max", age: 45,experience: 14}},
//              {producer:"kia",year: 2018,volume: 1.6,power: 120,driver:{name:"egor", age: 39,experience: 11}},
//              {producer:"seat",year: 2008,volume: 2.6,power: 180,driver:{name:"john", age: 21,experience: 3}},
//              {producer:"lada",year: 2010,volume: 2.6,power: 150,driver:{name:"alex", age: 31,experience: 4}},
//              ];




// __________________________________________________________________________________________________________________
// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

// let arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
// let key = +prompt('Введите цифру')
// let minIndex = arr.indexOf(key);
// let maxIndex = arr.lastIndexOf(key);
//
// console.log(minIndex);
// console.log(maxIndex);



