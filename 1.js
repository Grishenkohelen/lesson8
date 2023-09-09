// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

console.log('-------------------------------');

let user1 = new User(1, 'John', 'Smith', 'user1@gmail.com', '+1029372931');
let user2 = new User(10, 'Andrew', 'Smith', 'user2@gmail.com', '+1029372932');
let user3 = new User(3, 'Frank', 'Smith', 'user3@gmail.com', '+1029372933');
let user4 = new User(6, 'Helen', 'Smith', 'user4@gmail.com', '+1029372934');
let user5 = new User(5, 'Danil', 'Smith', 'user5@gmail.com', '+1029372935');
let user6 = new User(4, 'Samanta', 'Smith', 'user6@gmail.com', '+1029372936');
let user7 = new User(7, 'Oksana', 'Smith', 'user7@gmail.com', '+1029372937');
let user8 = new User(8, 'Dick', 'Smith', 'user8@gmail.com', '+1029372938');
let user9 = new User(9, 'Gennadiy', 'Smith', 'user9@gmail.com', '+1029372939');
let user10 = new User(2, 'Ruslan', 'Smith', 'user10@gmail.com', '+1029372910');

let users = [user1, user2, user3, user4, user5, user6, user7, user8, user9, user10];

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let idFilter = users.filter(el => el.id % 2 === 0);
console.log(idFilter);
console.log('-------------------------------')

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)


let idSort = users.sort((a, b) => a.id - b.id).reverse();
console.log(idSort)
console.log('-------------------------------')

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname , email, phone, order) {
        return {id,name,surname,email,phone,order}
    }
}



let client1 = new Client(1, 'John', 'Smith', 'user1@gmail.com', '+1029372931', ['chair', 'fridge', 'phone','cookie']);
let client2 = new Client(10, 'Andrew', 'Smith', 'user2@gmail.com', '+1029372932', ['chair', 'fridge', 'phone']);
let client3 = new Client(3, 'Frank', 'Smith', 'user3@gmail.com', '+1029372933', ['chair', 'fridge']);
let client4 = new Client(6, 'Helen', 'Smith', 'user4@gmail.com', '+1029372934', ['chair', 'fridge', 'phone','cookie','bed']);
let client5 = new Client(5, 'Danil', 'Smith', 'user5@gmail.com', '+1029372935', ['chair', 'fridge', 'phone','cookie','bed','donut']);
let client6 = new Client(4, 'Samanta', 'Smith', 'user6@gmail.com', '+1029372936', ['chair']);
let client7 = new Client(7, 'Oksana', 'Smith', 'user7@gmail.com', '+1029372937',['chair', 'fridge', 'phone','cookie','bed','donut','ice-cream']);
let client8 = new Client(8, 'Dick', 'Smith', 'user8@gmail.com', '+1029372938',['chair', 'fridge', 'phone','cookie','bed','donut']);
let client9 = new Client(9, 'Gennadiy', 'Smith', 'user9@gmail.com', '+1029372939',['chair', 'fridge', 'phone','cookie']);
let client10 = new Client(2, 'Ruslan', 'Smith', 'user10@gmail.com', '+1029372910', ['chair', 'fridge']);

let clients = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10];

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let orderSort = clients.sort((a, b) => a.order.length - b.order.length).reverse();
console.log(orderSort)
console.log('-------------------------------');

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function car(model,brand,year,maxSpeed,engineCapacity){
    this.model = model;
    this.brand = brand;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    let driver = {};
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    this.info = function (){
        console.log(`model = ${this.model}`);
        console.log(`brand = ${this.brand}`);
        console.log(`year = ${this.year}`);
        console.log(`maxSpeed = ${this.maxSpeed}`);
        console.log(`engineCapacity = ${this.engineCapacity}`);
    }
    this.increaseMaxSpeed = function (newSpeed){
       this.maxSpeed = newSpeed;
    }
    this.changeYear = function (newValue){
        this.year = newValue;
    }
    this.addDriver = function (driver){
        this.driver = driver;
    }
}

car1 = new car('m5', 'bmv', '2017', 210, 20);

car1.drive()
car1.increaseMaxSpeed(300);
car1.drive()
car1.changeYear(1982);
car1.addDriver([{
    name: 'John',
    age: 27,
    gender: 'male'
}])
car1.info();
console.log(car1);


console.log('-------------------------------');

// - (Те саме, тільки через клас)

class carClass {
    constructor(model,brand,year,maxSpeed,engineCapacity) {
        this.model = model;
        this.brand = brand;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
        this.driver = {};
    }
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    };
    info(){
        console.log(`model = ${this.model}`);
        console.log(`brand = ${this.brand}`);
        console.log(`year = ${this.year}`);
        console.log(`maxSpeed = ${this.maxSpeed}`);
        console.log(`engineCapacity = ${this.engineCapacity}`);
    }
    increaseMaxSpeed(newSpeed){
        this.maxSpeed = newSpeed;
    }
    changeYear(newValue){
        this.year = newValue;
    }
    addDriver(driver){
        this.driver = driver
    }
}

car2 = new carClass('m5', 'bmv', '2017', 210, 20);
car2.drive();
car2.increaseMaxSpeed(310);
car2.changeYear(2100);
car2.info()
car2.addDriver([{
    name: 'Helen',
    age: 37,
    gender: 'female'
}])
console.log(car2);

console.log('-------------------------------');

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

class Cinderella {
    constructor(name,age,feetSize) {
        this.name = name;
        this.age = age;
        this.feetSize = feetSize;
    }
}

let cinderella1 = new Cinderella('Rose', 18, 36);
let cinderella2 = new Cinderella('Helen', 17, 34);
let cinderella3 = new Cinderella('Mariya', 19, 39);
let cinderella4 = new Cinderella('Diana', 18, 38);
let cinderella5 = new Cinderella('Yana', 18, 35);
let cinderella6 = new Cinderella('Galina', 16, 37);
let cinderella7 = new Cinderella('Lisa', 17, 40);
let cinderella8 = new Cinderella('Kate', 19, 41);
let cinderella9 = new Cinderella('Olena', 20, 34);
let cinderella10 = new Cinderella('Rose', 18, 33);

let cinderells = [cinderella1, cinderella2, cinderella3, cinderella4, cinderella5, cinderella6, cinderella7, cinderella8, cinderella9, cinderella10];

class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
}

let prince = new Prince('Arthur', 22, 38);

cinderells.forEach(function (c){
    if (c.feetSize === prince.shoe) {
        console.log(`${c.name} is Cinderella!`);
        return c;
    }
    else return 0;
})


console.log('-------------------------------');
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

cinderells.find(function (c){
    if (c.feetSize === prince.shoe) {
        console.log(`${c.name} is Cinderella!`);
        return c;
    }
    else return 0;
})